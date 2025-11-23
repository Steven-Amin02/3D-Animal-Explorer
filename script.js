// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

// ===============================
// Anatomy Data
// ===============================
const anatomyData = {
  Horse: {
    overview: {
      title: "Horse Anatomy",
      category: "Complete Structure",
      icon: "🐎",
      description:
        "Horses are powerful, fast, and highly athletic animals built for endurance and movement. Their anatomy combines strength, balance, and sensitivity.",
      details: [
        { emoji: "🦴", label: "Skeleton", value: "205 bones" },
        { emoji: "💪", label: "Muscles", value: "700+ muscles" },
        { emoji: "❤️", label: "Heart", value: "Large & efficient" },
      ],
    },
    // Add specific hotspot data keys here if needed
  },
  Cow: {
    overview: {
      title: "Cow Anatomy",
      category: "Bovine System",
      icon: "🐄",
      description:
        "The bovine muscular system is built for endurance, stability, and powerful movement. Cows possess strong, slow-twitch–dominant muscles.",
      details: [
        { emoji: "💨", label: "Endurance", value: "High stamina" },
        { emoji: "🏋️", label: "Strength", value: "Supports 800kg" },
        { emoji: "🚶", label: "Gait", value: "Stable movement" },
      ],
    },
  },
  Cat: {
    overview: {
      title: "Cat Anatomy",
      category: "Feline System",
      icon: "🐱",
      description:
        "Cats are agile, curious, and highly adaptable animals known for their balance, sharp senses, and independent nature.",
      details: [
        { emoji: "👂", label: "Senses", value: "Night vision" },
        { emoji: "⚡", label: "Agility", value: "Fast reflexes" },
        { emoji: "🐾", label: "Behavior", value: "Independent" },
      ],
    },
  },
  Turkey: {
    overview: {
      title: "Turkey Anatomy",
      category: "Avian System",
      icon: "🦃",
      description:
        "Turkeys are large birds with specialized anatomy for ground living and short bursts of flight.",
      details: [
        { emoji: "🪶", label: "Feathers", value: "5000+ feathers" },
        { emoji: "🦴", label: "Bones", value: "Lightweight" },
        { emoji: "🦃", label: "Wattles", value: "Thermoregulation" },
      ],
    },
  },
}

// ===============================
// State Management
// ===============================
let currentState = "Horse"
let viewers = {}
let isAutoRotating = true
let hotspotsVisible = true

// ===============================
// Initialization
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // Intro Screen
  const introScreen = document.getElementById("introScreen")
  const startButton = document.getElementById("startButton")

  startButton.addEventListener("click", () => {
    introScreen.style.opacity = '0'
    introScreen.style.visibility = 'hidden'
    setTimeout(() => introScreen.remove(), 500)
  })

  init()
})

function init() {
  viewers = {
    Horse: document.getElementById("HorseViewer"),
    Cow: document.getElementById("CowViewer"),
    Cat: document.getElementById("CatViewer"),
    Turkey: document.getElementById("TurkeyViewer"),
  }

  setupEventListeners()
  setupModelInteractions()

  // Initial Info
  updateInfoCard('overview')
}

// ===============================
// Event Listeners
// ===============================
function setupEventListeners() {
  // Dock Navigation
  document.querySelectorAll(".dock-item").forEach((item) => {
    item.addEventListener("click", () => {
      const model = item.dataset.model
      switchState(model)
    })
  })

  // Controls
  document.getElementById("themeToggle").addEventListener("click", toggleTheme)
  document.getElementById("zoomIn").addEventListener("click", () => zoom(0.9))
  document.getElementById("zoomOut").addEventListener("click", () => zoom(1.1))
  document.getElementById("resetView").addEventListener("click", resetView)
  document.getElementById("autoRotateToggle").addEventListener("click", toggleAutoRotate)
  document.getElementById("hotspotsToggle").addEventListener("click", toggleHotspots)
  document.getElementById("arButton").addEventListener("click", activateAR)

  // Info Card
  document.getElementById("closeCard").addEventListener("click", closeInfoCard)
}

// ===============================
// Logic
// ===============================
function switchState(newState) {
  if (currentState === newState) return

  // Update Dock
  document.querySelectorAll(".dock-item").forEach(item => {
    item.classList.toggle("active", item.dataset.model === newState)
  })

  // Switch Viewers
  Object.entries(viewers).forEach(([key, viewer]) => {
    if (key === newState) {
      viewer.classList.add("active")
      viewer.autoRotate = isAutoRotating

      // Ensure hotspots state matches
      const hotspots = viewer.querySelectorAll('.Hotspot')
      hotspots.forEach(h => h.classList.toggle('hidden', !hotspotsVisible))

    } else {
      viewer.classList.remove("active")
      viewer.autoRotate = false
    }
  })

  currentState = newState
  updateInfoCard('overview')
}

function updateInfoCard(key) {
  const data = (anatomyData[currentState] && anatomyData[currentState][key])
    || anatomyData[currentState].overview
    || { title: 'Unknown', description: 'No data available.' }

  const card = document.getElementById("infoCard")
  const icon = document.getElementById("cardIcon")
  const title = document.getElementById("cardTitle")
  const category = document.getElementById("cardCategory")
  const desc = document.getElementById("cardDesc")
  const stats = document.getElementById("cardStats")

  icon.textContent = data.icon || '🔍'
  title.textContent = data.title
  category.textContent = data.category || 'Detail'
  desc.textContent = data.description

  // Update Stats
  stats.innerHTML = ''
  if (data.details) {
    data.details.forEach(d => {
      const el = document.createElement('div')
      el.className = 'stat-item'
      el.innerHTML = `
        <span class="stat-icon">${d.emoji}</span>
        <div class="stat-content">
          <h4>${d.label}</h4>
          <p>${d.value}</p>
        </div>
      `
      stats.appendChild(el)
    })
  }

  // Show Card
  card.classList.add("visible")
}

function closeInfoCard() {
  document.getElementById("infoCard").classList.remove("visible")
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode")
  const btn = document.getElementById("themeToggle")
  btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙"
}

function toggleAutoRotate() {
  isAutoRotating = !isAutoRotating
  if (viewers[currentState]) {
    viewers[currentState].autoRotate = isAutoRotating
  }
}

function toggleHotspots() {
  hotspotsVisible = !hotspotsVisible
  Object.values(viewers).forEach(viewer => {
    const hotspots = viewer.querySelectorAll('.Hotspot')
    hotspots.forEach(h => h.classList.toggle('hidden', !hotspotsVisible))
  })
}

function zoom(factor) {
  const viewer = viewers[currentState]
  if (viewer) {
    const orbit = viewer.getCameraOrbit()
    const newRadius = orbit.radius * factor
    viewer.cameraOrbit = `${orbit.theta}rad ${orbit.phi}rad ${newRadius}m`
  }
}

function resetView() {
  const viewer = viewers[currentState]
  if (viewer) {
    viewer.cameraOrbit = "0deg 75deg 105%"
    viewer.fieldOfView = "45deg"
  }
}

function activateAR() {
  const viewer = viewers[currentState]
  if (viewer) {
    viewer.activateAR()
  }
}

// ===============================
// Model Interaction
// ===============================
function setupModelInteractions() {
  Object.values(viewers).forEach(viewer => {
    viewer.addEventListener('click', (e) => {
      const hotspot = e.target.closest('.Hotspot')
      if (hotspot) {
        const title = hotspot.dataset.title
        const desc = hotspot.dataset.description

        // Create temporary data object for hotspot click
        const data = {
          title: title || "Anatomy Part",
          category: "Detail",
          icon: "📍",
          description: desc || "No description available.",
          details: []
        }

        // Manually update card since it's dynamic data not in anatomyData
        updateInfoCardWithData(data)
      }
    })
  })
}

function updateInfoCardWithData(data) {
  const card = document.getElementById("infoCard")
  document.getElementById("cardIcon").textContent = data.icon
  document.getElementById("cardTitle").textContent = data.title
  document.getElementById("cardCategory").textContent = data.category
  document.getElementById("cardDesc").textContent = data.description
  document.getElementById("cardStats").innerHTML = '' // Clear stats for simple hotspots
  card.classList.add("visible")
}

// ===============================
// Mobile Touch Gestures
// ===============================
// Prevent pull-to-refresh on mobile
document.body.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) {
    return // Allow pinch-to-zoom
  }
  const target = e.target
  const isScrollable = target.closest('.info-card')
  if (!isScrollable && window.scrollY === 0) {
    e.preventDefault()
  }
}, { passive: false })

// Add active state feedback for touch
document.querySelectorAll('.dock-item, .control-btn, .intro-btn').forEach(btn => {
  btn.addEventListener('touchstart', () => {
    btn.style.transform = 'scale(0.95)'
  }, { passive: true })

  btn.addEventListener('touchend', () => {
    btn.style.transform = ''
  }, { passive: true })

  btn.addEventListener('touchcancel', () => {
    btn.style.transform = ''
  }, { passive: true })
})
