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
      "Horses are powerful, fast, and highly athletic animals built for endurance and movement. Their anatomy combines strength, balance, and sensitivity, allowing them to run long distances, respond quickly to stimuli, and interact socially with their herd.",
    details: [
      { emoji: "🦴", label: "Skeleton", value: "Around 205 bones supporting speed and stability" },
      { emoji: "💪", label: "Muscles", value: "Over 700 muscles enabling strength and precise control" },
      { emoji: "❤️", label: "Systems", value: "Large heart and efficient lungs for long-distance running" },
    ],
  },},
// },   head: {
//       title: "Head & Skull",
//       category: "Skeletal Structure",
//       icon: "🐱",
//       description:
//         "The feline skull is compact and rounded, with large eye sockets for excellent vision. Cats have specialized jaw structures for their carnivorous diet.",
//       details: [
//         { emoji: "🧠", label: "Function", value: "Houses brain and sensory organs optimized for hunting" },
//         { emoji: "🔬", label: "Composition", value: "29 bones including cranium and facial bones" },
//         { emoji: "⚡", label: "Features", value: "Large eye sockets, acute hearing structures, whisker follicles" },
//       ],
//     },
//     torso: {
//       title: "Torso & Ribcage",
//       category: "Core Structure",
//       icon: "🫁",
//       description:
//         "The cat's flexible spine and ribcage allow for incredible agility and the ability to twist mid-air. The thoracic cavity protects vital organs.",
//       details: [
//         { emoji: "❤️", label: "Protection", value: "13 pairs of ribs shield heart, lungs, and major vessels" },
//         { emoji: "🫁", label: "Respiration", value: "Flexible ribcage enables efficient breathing during activity" },
//         { emoji: "🔗", label: "Flexibility", value: "Highly mobile spine allows extreme body contortions" },
//       ],
//     },
//     legs: {
//       title: "Legs & Paws",
//       category: "Locomotion System",
//       icon: "🐾",
//       description:
//         "Cats are digitigrade, walking on their toes. Their legs are built for explosive power, climbing, and silent stalking.",
//       details: [
//         { emoji: "🦴", label: "Bones", value: "Femur, tibia, fibula, and specialized paw bones" },
//         { emoji: "🔄", label: "Joints", value: "Flexible joints enable jumping up to 6x body length" },
//         { emoji: "⚖️", label: "Function", value: "Silent movement, climbing, pouncing, landing" },
//       ],
//     },
//     tail: {
//       title: "Tail",
//       category: "Balance & Communication",
//       icon: "🐈",
//       description:
//         "The cat's tail contains 19-23 vertebrae and serves as a counterbalance during acrobatic movements and communicates emotional states.",
//       details: [
//         { emoji: "⚖️", label: "Balance", value: "Acts as dynamic counterweight during jumps and turns" },
//         { emoji: "💬", label: "Communication", value: "Position and movement express mood and intent" },
//         { emoji: "🦴", label: "Structure", value: "19-23 caudal vertebrae with extensive musculature" },
//       ],
//     },
//     spine: {
//       title: "Spine & Vertebrae",
//       category: "Central Support",
//       icon: "🦴",
//       description:
//         "Cats have an exceptionally flexible spine with 53 vertebrae (7 more than humans), enabling their legendary agility and ability to always land on their feet.",
//       details: [
//         { emoji: "🛡️", label: "Protection", value: "Shields spinal cord while allowing extreme flexibility" },
//         { emoji: "💪", label: "Flexibility", value: "53 loosely connected vertebrae enable 180° rotation" },
//         { emoji: "🔄", label: "Righting Reflex", value: "Flexible spine allows mid-air body rotation" },
//       ],
//     },
//     unknown: {
//       title: "Cat Anatomy Part",
//       category: "Feline Structure",
//       icon: "🔍",
//       description: "This part doesn't have detailed info yet.",
//       details: [{ emoji: "📌", label: "Tip", value: "Map mesh mesh names to data keys for richer info." }],
//     },
//   },
 Cow: {
  overview: {
    title: "Cow System",
    category: "Muscular System",
    icon: "🐄",
    description:
      "The bovine muscular system is built for endurance, stability, and powerful movement. Cows possess strong, slow-twitch–dominant muscles that support standing for long periods, walking long distances, and driving heavy body mass.",
    details: [
      { emoji: "💨", label: "Endurance", value: "High slow-twitch fibers for long, steady movement" },
      { emoji: "🏋️", label: "Strength", value: "Powerful limbs capable of supporting 400–800 kg body weight" },
      { emoji: "🚶", label: "Movement", value: "Designed for stable gait and efficient grazing over large fields" },
    ],
  }
},
  //   head: {
  //     title: "Facial & Jaw Muscles",
  //     category: "Muscular System",
  //     icon: "💪",
  //     description:
  //       "Powerful jaw muscles give cats one of the strongest bite forces relative to size. Facial muscles control whiskers and expressions.",
  //     details: [
  //       { emoji: "🍖", label: "Bite Force", value: "Masseter & temporalis deliver powerful carnivore bite" },
  //       { emoji: "😺", label: "Expression", value: "Subtle facial muscles communicate with other cats" },
  //       { emoji: "⚡", label: "Whiskers", value: "Specialized muscles control whisker positioning" },
  //     ],
  //   },
  //   legs: {
  //     title: "Leg Musculature",
  //     category: "Muscular System",
  //     icon: "🦵",
  //     description: "Explosive leg muscles allow cats to jump, climb, and sprint with remarkable power and precision.",
  //     details: [
  //       { emoji: "⚡", label: "Power", value: "Fast-twitch muscles enable explosive jumping and sprinting" },
  //       { emoji: "🏃", label: "Speed", value: "Can reach speeds up to 30 mph in short bursts" },
  //       { emoji: "💪", label: "Climbing", value: "Specialized muscles for vertical movement and gripping" },
  //     ],
  //   },
  //   tail: {
  //     title: "Tail Muscles",
  //     category: "Muscular System",
  //     icon: "🐾",
  //     description: "Complex network of muscles provides precise tail control for balance and communication.",
  //     details: [
  //       { emoji: "🔄", label: "Control", value: "Multiple muscle layers enable precise positioning" },
  //       { emoji: "💬", label: "Expression", value: "Rapid movements communicate excitement or agitation" },
  //       { emoji: "⚖️", label: "Balance", value: "Dynamic adjustments during acrobatic movements" },
  //     ],
  //   },
  //   back: {
  //     title: "Back Musculature",
  //     category: "Muscular System",
  //     icon: "💪",
  //     description:
  //       "Layered back muscles support the flexible spine and enable the cat's characteristic arching and stretching.",
  //     details: [
  //       { emoji: "🦴", label: "Support", value: "Erector spinae maintain posture and spinal alignment" },
  //       { emoji: "💪", label: "Power", value: "Latissimus dorsi drives climbing and pulling motions" },
  //       { emoji: "🛡️", label: "Flexibility", value: "Multiple layers allow extreme spinal extension" },
  //     ],
  //   },
  //   unknown: {
  //     title: "Cat Muscle",
  //     category: "Feline Muscular System",
  //     icon: "🔍",
  //     description: "No detailed info available yet.",
  //     details: [{ emoji: "📌", label: "Tip", value: "Map mesh names to data keys for richer info." }],
  //   },
  // },
  Cat: {
  overview: {
    title: "Cat System",
    category: "General Overview",
    icon: "😺",
    description:
      "Cats are agile, curious, and highly adaptable animals known for their balance, sharp senses, and independent nature. Their gentle movements, quick reflexes, and strong instincts make them skilled hunters and excellent companions in homes around the world.",
    details: [
      { emoji: "👂", label: "Senses", value: "Exceptional hearing and night vision" },
      { emoji: "⚡", label: "Agility", value: "Fast reflexes and graceful movement" },
      { emoji: "🐾", label: "Behavior", value: "Curious, independent, and playful" }
    ]
  }
}
//     head: {
//       title: "Skull & Cranium",
//       category: "Skeletal System",
//       icon: "💀",
//       description:
//         "The cat skull features 29 bones with large orbits for eyes, specialized teeth sockets, and a shortened facial structure typical of carnivores.",
//       details: [
//         { emoji: "🦷", label: "Teeth", value: "30 teeth including specialized canines and carnassials" },
//         { emoji: "👁️", label: "Eye Sockets", value: "Large forward-facing orbits for binocular vision" },
//         { emoji: "⚡", label: "Jaw", value: "Hinged jaw with limited side-to-side movement" },
//       ],
//     },
//     torso: {
//       title: "Ribcage & Thorax",
//       category: "Skeletal System",
//       icon: "🦴",
//       description:
//         "The thoracic Cat consists of 13 pairs of ribs protecting vital organs while maintaining flexibility for the cat's agile movements.",
//       details: [
//         { emoji: "❤️", label: "Protection", value: "13 rib pairs form protective cage for organs" },
//         { emoji: "🔗", label: "Sternum", value: "Flexible sternum allows chest expansion" },
//         { emoji: "💪", label: "Attachment", value: "Provides anchor points for powerful muscles" },
//       ],
//     },
//     legs: {
//       title: "Limb Bones",
//       category: "Skeletal System",
//       icon: "🦴",
//       description:
//         "Cat limbs are built for power and precision, with elongated bones and specialized joints for jumping and climbing.",
//       details: [
//         { emoji: "🦴", label: "Structure", value: "Scapula, humerus, radius, ulna, femur, tibia, fibula" },
//         { emoji: "🐾", label: "Paws", value: "Digitigrade stance with retractable claw mechanisms" },
//         { emoji: "🔄", label: "Joints", value: "Highly mobile shoulder and hip joints" },
//       ],
//     },
//     tail: {
//       title: "Caudal Vertebrae",
//       category: "Skeletal System",
//       icon: "🦴",
//       description:
//         "The tail Cat consists of 19-23 small vertebrae that decrease in size toward the tip, providing flexibility and balance.",
//       details: [
//         { emoji: "🔢", label: "Count", value: "19-23 caudal vertebrae depending on breed" },
//         { emoji: "🔄", label: "Flexibility", value: "Ball-and-socket joints between vertebrae" },
//         { emoji: "⚖️", label: "Function", value: "Extends spine for balance and communication" },
//       ],
//     },
//     spine: {
//       title: "Vertebral Column",
//       category: "Skeletal System",
//       icon: "🦴",
//       description:
//         "The cat's spine contains 53 vertebrae with elastic cushioning discs, giving cats their remarkable flexibility and ability to squeeze through tight spaces.",
//       details: [
//         { emoji: "🔢", label: "Composition", value: "7 cervical, 13 thoracic, 7 lumbar, 3 sacral, 19-23 caudal" },
//         { emoji: "🔄", label: "Flexibility", value: "Loose connections allow 180° spinal rotation" },
//         { emoji: "🛡️", label: "Protection", value: "Neural canal protects spinal cord" },
//       ],
//     },
//     pelvis: {
//       title: "Pelvic Girdle",
//       category: "Skeletal System",
//       icon: "🦴",
//       description:
//         "The narrow pelvis provides attachment for powerful hind leg muscles while maintaining the cat's slim, agile build.",
//       details: [
//         { emoji: "💪", label: "Muscle Attachment", value: "Anchors powerful jumping and running muscles" },
//         { emoji: "🔗", label: "Connection", value: "Links spine to hind limbs via sacrum" },
//         { emoji: "⚡", label: "Design", value: "Narrow structure maintains agility" },
//       ],
//     },
//     unknown: {
//       title: "Skeletal Part",
//       category: "Feline Cat",
//       icon: "🔍",
//       description: "No detailed info available yet.",
//       details: [{ emoji: "📌", label: "Tip", value: "Map mesh names to data keys for richer info." }],
//     },
//   },
// }
 }
// ===============================
// State Management
// ===============================
let modelOverviewShown = { Horse: false, Cow: false, Cat: false }
let currentState = "Horse"
let viewers = {}
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
let isAutoRotating = true
let hotspotsVisible = false
// Prevent double-click zoom behavior
document.addEventListener('dblclick', (e) => {
  e.preventDefault()
}, { passive: false })

// ===============================
// Performance Monitoring
// ===============================
let loadProgress = 0
let modelsLoaded = 0

function updateLoadProgress(increment = 50) {
  loadProgress += increment
  const perfProgress = document.getElementById('perfProgress')
  if (perfProgress) {
    perfProgress.style.width = Math.min(loadProgress, 100) + '%'
  }
  
  modelsLoaded++
  
  // Hide progress hint after first model loads
  if (modelsLoaded >= 1) {
    setTimeout(() => {
      const perfHint = document.getElementById('perfHint')
      if (perfHint) {
        perfHint.style.opacity = '0'
        perfHint.style.pointerEvents = 'none'
        setTimeout(() => {
          perfHint.style.display = 'none'
          perfHint.remove()
        }, 300)
      }
    }, 500)
  }
}

// ===============================
// Intro Screen Handler
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById("introScreen")
  const startButton = document.getElementById("startButton")

  // Load saved theme
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode')
    const themeToggle = document.getElementById("themeToggle")
    if (themeToggle) {
      themeToggle.textContent = "☀️"
    }
  }

  // Auto-hide the on-screen instructions after 3 seconds
  setTimeout(() => {
    const instructions = document.querySelector('.instructions')
    const hints = document.querySelector('.interaction-hints')
    
    if (instructions) {
      instructions.style.opacity = '0'
      setTimeout(() => instructions.style.display = 'none', 300)
    }
    
    if (hints) {
      hints.style.opacity = '0'
      setTimeout(() => hints.style.display = 'none', 300)
    }
  }, 3000)
  
  startButton.addEventListener("click", () => {
    introScreen.classList.add("hidden")
    setTimeout(() => {
      introScreen.remove()
    }, 400)
  })

  // Initialize after intro
  init()
})

// ===============================
// Initialization
// ===============================
function init() {
  // Get model viewer elements
  viewers = {
    Horse: document.getElementById("HorseViewer"),
    Cow: document.getElementById("CowViewer"),
    Cat: document.getElementById("CatViewer"),
  }

  // Hide Cat, Cow, and Horse hotspots by default (will toggle on via button)
  if (viewers.Cat) {
    const catHotspots = viewers.Cat.querySelectorAll('.Hotspot')
    catHotspots.forEach(h => h.classList.add('hidden'))
  }
  if (viewers.Cow) {
    const cowHotspots = viewers.Cow.querySelectorAll('.Hotspot')
    cowHotspots.forEach(h => h.classList.add('hidden'))
  }
  if (viewers.Horse) {
    const horseHotspots = viewers.Horse.querySelectorAll('.Hotspot')
    horseHotspots.forEach(h => h.classList.add('hidden'))
  }

  // Setup model viewer event listeners with performance tracking
  Object.entries(viewers).forEach(([key, viewer]) => {
    if (!viewer) {
      console.error(`Model viewer for ${key} not found!`)
      return
    }

    viewer.addEventListener("load", () => {
      updateLoadProgress()
      optimizeViewerPerformance(viewer)
    })

    viewer.addEventListener("error", (event) => {
      console.error(`Error loading ${key} model:`, event)
      showModelError(key)
    })
  })

  setupEventListeners()
  setupDrawerGestures()
  setupModelInteractions()
  setupModelMenu()

  // Update hotspots toggle initial state (disabled until Cat, Cow, or Horse active)
  const hotspotsBtn = document.getElementById('hotspotsToggle')
  if (hotspotsBtn) {
    hotspotsBtn.classList.add('disabled')
    hotspotsBtn.title = 'Hotspots available for Cat, Cow, and Horse'
  }

  // Show initial anatomy info and mark as shown for the starting model
  showAnatomyInfo("overview")
  modelOverviewShown[currentState] = true

  // Hide interaction hints after 3 seconds
  setTimeout(() => {
    const hints = document.getElementById('interactionHints')
    if (hints) {
      hints.style.opacity = '0'
      setTimeout(() => hints.style.display = 'none', 300)
    }
  }, 3000)
}

// ===============================
// Performance Optimizations
// ===============================
function optimizeViewerPerformance(viewer) {
  // Simplified interaction handling
  let interactionTimer = null
  
  const handleInteractionStart = () => {
    clearTimeout(interactionTimer)
    if (isAutoRotating) {
      viewer.autoRotate = false
    }
  }
  
  const handleInteractionEnd = () => {
    clearTimeout(interactionTimer)
    interactionTimer = setTimeout(() => {
      if (isAutoRotating && viewer.classList.contains('active')) {
        viewer.autoRotate = true
      }
    }, 2000)
  }
  
  viewer.addEventListener('camera-change', handleInteractionStart)
  viewer.addEventListener('mousedown', handleInteractionStart)
  viewer.addEventListener('touchstart', handleInteractionStart, { passive: true })
  viewer.addEventListener('wheel', handleInteractionStart, { passive: true })
  viewer.addEventListener('mouseup', handleInteractionEnd)
  viewer.addEventListener('touchend', handleInteractionEnd, { passive: true })
  
  viewer.addEventListener('dblclick', (e) => {
    e.preventDefault()
  }, { passive: false })
  
  viewer.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
}

function showModelError(modelType) {
  const errorMessage = `
    <div style="padding: 20px; text-align: center; color: var(--danger);">
      <h3>⚠️ Model Not Found</h3>
      <p>The ${modelType} model file could not be loaded.</p>
      <p style="font-size: 12px; color: var(--muted);">
        Expected path: /models/cat-${modelType}.glb
      </p>
      <p style="font-size: 12px; color: var(--muted);">
        Please ensure the GLB model file exists at this location.
      </p>
    </div>
  `

  const viewer = viewers[modelType]
  if (viewer) {
    const poster = viewer.querySelector('[slot="poster"]')
    if (poster) {
      poster.innerHTML = errorMessage
    }
  }
}

// ===============================
// Model Interaction Setup
// ===============================
function setupModelInteractions() {
  Object.entries(viewers).forEach(([key, viewer]) => {
    if (!viewer) return
    
    // Click handler with hotspot support
    viewer.addEventListener('click', (e) => {
      const hotspotEl = e.target.closest('.Hotspot')
      if (hotspotEl) {
        const k = hotspotEl.dataset.key || 'unknown'
        const title = hotspotEl.dataset.title
        const description = hotspotEl.dataset.description
        const category = hotspotEl.dataset.category
        if (title || description || category) {
          const fallback = (anatomyData[currentState] && anatomyData[currentState][k]) || anatomyData[currentState].overview
          showAnatomyInfo({
            title: title || fallback.title,
            category: category || fallback.category,
            icon: fallback.icon || '🔍',
            description: description || fallback.description,
            details: fallback.details || []
          })
        } else {
          showAnatomyInfo(k)
        }
        return
      }
      // Background click: only show overview once per model
      if (!modelOverviewShown[currentState]) {
        showAnatomyInfo('overview')
        modelOverviewShown[currentState] = true
      }
    })
  })
}

// ===============================
// Drawer Gesture Support (Simplified)
// ===============================
function setupDrawerGestures() {
  const drawer = document.getElementById('infoDrawer')
  if (!drawer) return
  
  const drawerHandle = drawer.querySelector('.drawer-handle')
  if (!drawerHandle) {
    const handle = document.createElement('div')
    handle.className = 'drawer-handle'
    drawer.insertBefore(handle, drawer.firstChild)
  }
}

// ===============================
// Event Listeners Setup
// ===============================
function setupEventListeners() {
  // Theme toggle
  document.getElementById("themeToggle").addEventListener("click", toggleTheme)

  // Model menu items
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", () => {
      const model = item.dataset.model
      switchState(model)
      closeModelMenu()
    })
  })

  // Control buttons
  document.getElementById("resetView").addEventListener("click", resetView)
  document.getElementById("arButton").addEventListener("click", activateAR)
  document.getElementById("autoRotateToggle").addEventListener("click", toggleAutoRotate)
  document.getElementById("zoomIn").addEventListener("click", zoomIn)
  document.getElementById("zoomOut").addEventListener("click", zoomOut)

  const hotspotsBtn = document.getElementById('hotspotsToggle')
  if (hotspotsBtn) {
    hotspotsBtn.addEventListener('click', toggleHotspots)
  }

  // Info drawer
  document.getElementById("drawerClose").addEventListener("click", closeDrawer)
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab))
  })

  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcuts)
}

// ===============================
// Keyboard Shortcuts
// ===============================
function handleKeyboardShortcuts(e) {
  switch(e.key) {
    case '1':
      switchState('Horse')
      break
    case '2':
      switchState('Cow')
      break
    case '3':
      switchState('Cat')
      break
    case 'r':
    case 'R':
      resetView()
      break
    case 'Escape':
      closeDrawer()
      break
    case '+':
    case '=':
      zoomIn()
      break
    case '-':
    case '_':
      zoomOut()
      break
  }
}

// ===============================
// Theme Toggle
// ===============================
function toggleTheme() {
  document.body.classList.toggle("dark-mode")
  const isDark = document.body.classList.contains("dark-mode")
  const themeToggle = document.getElementById("themeToggle")
  
  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀️" : "🌙"
  }

  // Save preference
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  } catch (e) {
    console.warn('Could not save theme preference:', e)
  }

  // Update model viewer environment
  Object.values(viewers).forEach((viewer) => {
    if (viewer) {
      viewer.environmentImage = "neutral"
    }
  })
}


// ===============================
// State Switching (Horse/Cow/Cat)
// ===============================
function switchState(state) {
  if (state === currentState) return

  currentState = state

  // Update menu item states
  document.querySelectorAll(".menu-item").forEach((item) => {
    const isActive = item.dataset.model === state
    item.classList.toggle('active', isActive)
  })

  // Switch model viewers with fade effect and lazy load
  Object.entries(viewers).forEach(([key, viewer]) => {
    const isActive = key === state
    if (isActive) {
      viewer.classList.add("active")
      // Lazy load model if not already loaded
      if (!viewer.src && viewer.id === "HorseViewer") {
        viewer.src = "models/Horse.glb"
      } else if (!viewer.src && viewer.id === "CowViewer") {
        viewer.src = "models/Cow.glb"
      } else if (!viewer.src && viewer.id === "CatViewer") {
        viewer.src = "models/Cat.glb"
      }
      if (isAutoRotating) {
        viewer.autoRotate = true
      }
    } else {
      viewer.classList.remove("active")
      viewer.autoRotate = false
    }
  })

  // Update hotspots toggle button availability and label
  const hotspotsBtn = document.getElementById('hotspotsToggle')
  if (hotspotsBtn) {
    const isSupported = state === 'Cat' || state === 'Cow' || state === 'Horse'
    hotspotsBtn.classList.toggle('disabled', !isSupported)
    hotspotsBtn.title = isSupported ? (hotspotsVisible ? 'Hide hotspots' : 'Show hotspots') : 'Hotspots available for Cat, Cow, and Horse'
  }

  // Apply current hotspots visibility to new active viewer (Cat/Cow/Horse)
  const activeViewer = viewers[state]
  if (activeViewer) {
    const hs = activeViewer.querySelectorAll('.Hotspot')
    hs.forEach(h => h.classList.toggle('hidden', !hotspotsVisible))
  }

  // Show anatomy info for new state only on first entry
  if (!modelOverviewShown[state]) {
    showAnatomyInfo("overview")
    modelOverviewShown[state] = true
  }

  if (isMobile && navigator.vibrate) {
    navigator.vibrate(10)
  }
}

// ===============================
// Info Display
// ===============================
function showAnatomyInfo(info) {
  let data
  if (info && typeof info === 'object') {
    data = {
      title: info.title || 'Anatomy',
      category: info.category || 'Overview',
      icon: info.icon || '🔍',
      description: info.description || '',
      details: info.details || []
    }
  } else {
    const key = info
    const source = anatomyData[currentState] || {}
    data = source[key] || source.overview || { title: 'Anatomy', category: 'Overview', icon: '🔍', description: '', details: [] }
  }

  document.getElementById("drawerIcon").textContent = data.icon || '🔍'
  document.getElementById("drawerTitle").textContent = data.title || 'Anatomy'
  document.getElementById("drawerCategory").textContent = data.category || 'Overview'
  document.getElementById("drawerDesc").textContent = data.description || ''

  // Populate details tab
  const detailsContainer = document.getElementById("drawerDetails")
  detailsContainer.innerHTML = ""

  const detailsList = Array.isArray(data.details) ? data.details : []
  detailsList.forEach((detail) => {
    const detailItem = document.createElement("div")
    detailItem.className = "detail-item"
    detailItem.innerHTML = `
      <div class="detail-emoji">${detail.emoji || ''}</div>
      <div class="detail-content">
        <div class="detail-label">${detail.label || ''}</div>
        <div class="detail-value">${detail.value || ''}</div>
      </div>
    `
    detailsContainer.appendChild(detailItem)
  })

  // Show drawer with animation
  const drawer = document.getElementById("infoDrawer")
  drawer.classList.add("open")
  drawer.style.transform = 'translateY(0)'
}

function closeDrawer() {
  const drawer = document.getElementById("infoDrawer")
  drawer.classList.remove("open")
  drawer.style.transform = 'translateY(100%)'
}

function switchTab(tabName) {
  // Update tab buttons with proper ARIA attributes
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const isActive = btn.dataset.tab === tabName
    btn.classList.toggle("active", isActive)
    btn.setAttribute("aria-selected", isActive)
  })

  // Show corresponding content with fade
  document.getElementById("tab-overview").style.display = tabName === "overview" ? "block" : "none"
  document.getElementById("tab-details").style.display = tabName === "details" ? "block" : "none"
  document.getElementById("tab-media").style.display = tabName === "media" ? "block" : "none"
}

// ===============================
// Camera Controls
// ===============================
function toggleAutoRotate() {
  isAutoRotating = !isAutoRotating
  const activeViewer = viewers[currentState]
  const toggleBtn = document.getElementById('autoRotateToggle')
  
  if (activeViewer) {
    activeViewer.autoRotate = isAutoRotating
    
    // Update button appearance
    if (isAutoRotating) {
      toggleBtn.classList.remove('disabled')
      toggleBtn.title = 'Disable auto-rotate'
    } else {
      toggleBtn.classList.add('disabled')
      toggleBtn.title = 'Enable auto-rotate'
    }
    
    // Haptic feedback
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(10)
    }
    
    showNotification(isAutoRotating ? 'Auto-rotate enabled' : 'Auto-rotate disabled')
  }
}

function zoomIn() {
  const activeViewer = viewers[currentState]
  if (activeViewer) {
    const currentOrbit = activeViewer.getCameraOrbit()
    const currentRadius = currentOrbit.radius
    const newRadius = Math.max(currentRadius * 0.9, 0.5) // Minimum 50% zoom
    
    activeViewer.cameraOrbit = `${currentOrbit.theta}rad ${currentOrbit.phi}rad ${newRadius}m`
    
    // Haptic feedback
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(5)
    }
  }
}

function zoomOut() {
  const activeViewer = viewers[currentState]
  if (activeViewer) {
    const currentOrbit = activeViewer.getCameraOrbit()
    const currentRadius = currentOrbit.radius
    const newRadius = Math.min(currentRadius * 1.1, 2.0) // Maximum 200% zoom out
    
    activeViewer.cameraOrbit = `${currentOrbit.theta}rad ${currentOrbit.phi}rad ${newRadius}m`
    
    // Haptic feedback
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(5)
    }
  }
}

function resetView() {
  const activeViewer = viewers[currentState]

  if (activeViewer) {
    activeViewer.resetTurntableRotation()
    activeViewer.cameraOrbit = "0deg 75deg 105%"
    activeViewer.fieldOfView = "45deg"
    
    // Re-enable auto-rotate if it was enabled
    if (isAutoRotating) {
      activeViewer.autoRotate = true
    }
    
    // Haptic feedback
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(10)
    }
    
    showNotification('View reset to default')
  }
}

function activateAR() {
  const activeViewer = viewers[currentState]

  if (activeViewer && activeViewer.canActivateAR) {
    activeViewer.activateAR()
  } else {
    showNotification("AR is not available on this device or browser.")
  }
}

// ===============================
// Notifications
// ===============================
function showNotification(message) {
  const notification = document.createElement('div')
  notification.className = 'notification'
  notification.textContent = message
  document.body.appendChild(notification)
  
  setTimeout(() => notification.classList.add('show'), 10)
  
  setTimeout(() => {
    notification.classList.remove('show')
    setTimeout(() => notification.remove(), 300)
  }, 3000)
}

// ===============================
// Model Menu Functions
// ===============================
function openModelMenu() {
  const panel = document.getElementById('menuPanel')
  const overlay = document.getElementById('menuOverlay')
  const btn = document.getElementById('menuToggleBtn')
  
  if (panel) panel.classList.add('open')
  if (overlay) overlay.classList.add('active')
  if (btn) btn.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeModelMenu() {
  const panel = document.getElementById('menuPanel')
  const overlay = document.getElementById('menuOverlay')
  const btn = document.getElementById('menuToggleBtn')
  
  if (panel) panel.classList.remove('open')
  if (overlay) overlay.classList.remove('active')
  if (btn) btn.classList.remove('active')
  document.body.style.overflow = ''
}

function setupModelMenu() {
  const toggleBtn = document.getElementById('menuToggleBtn')
  const closeBtn = document.getElementById('menuClose')
  const overlay = document.getElementById('menuOverlay')
  const panel = document.getElementById('menuPanel')
  
  if (!toggleBtn || !panel) return
  
  // Toggle button
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    if (panel.classList.contains('open')) {
      closeModelMenu()
    } else {
      openModelMenu()
    }
  })
  
  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      closeModelMenu()
    })
  }
  
  // Overlay click
  if (overlay) {
    overlay.addEventListener('click', () => {
      closeModelMenu()
    })
  }
  
  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      closeModelMenu()
    }
  })
}

// ===============================
// Hotspots Toggle
// ===============================
function toggleHotspots() {
  const activeViewer = viewers[currentState]
  if (!activeViewer || (currentState !== 'Cat' && currentState !== 'Cow' && currentState !== 'Horse')) {
    showNotification && showNotification('Switch to Cat, Cow, or Horse to view hotspots')
    return
  }

  hotspotsVisible = !hotspotsVisible
  const hs = activeViewer.querySelectorAll('.Hotspot')
  hs.forEach(h => h.classList.toggle('hidden', !hotspotsVisible))

  const btn = document.getElementById('hotspotsToggle')
  if (btn) {
    btn.classList.toggle('disabled', false)
    btn.title = hotspotsVisible ? 'Hide hotspots' : 'Show hotspots'
  }

  if (isMobile && navigator.vibrate) {
    navigator.vibrate(10)
  }

  showNotification && showNotification(hotspotsVisible ? 'Hotspots shown' : 'Hotspots hidden')
}
