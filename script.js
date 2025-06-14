// --- Global Constants & Utilities ---
// Define colorPalettes and themes here so they are accessible to all components
const colorPalettes = {
    'godlike-tech': {
        '--primary-accent': '#00C8FF', /* Electric Blue */
        '--secondary-accent': '#00FF64', /* Neon Green */
        '--tertiary-accent': '#9600FF', /* Cosmic Purple */
        '--glow-color': 'rgba(0, 200, 255, 0.7)',
        '--glow-color-light': 'rgba(0, 200, 255, 0.3)',
        '--success-color': '#00FF00',
        '--warning-color': '#FFA500',
        '--critical-color': '#FF0032',
        '--text-header-color': 'var(--primary-accent)',
        '--text-value-color': 'var(--secondary-accent)',
        '--text-secondary-value-color': 'var(--tertiary-accent)',
        '--button-gradient-start': 'var(--primary-accent)',
        '--button-gradient-end': 'var(--tertiary-accent)',
        '--button-hover-gradient-start': 'var(--tertiary-accent)',
        '--button-hover-gradient-end': 'var(--primary-accent)',
        '--input-border-color': 'var(--primary-accent)',
        '--input-focus-shadow': 'rgba(0, 255, 100, 0.3)',
        '--bar-chart-color': 'var(--primary-accent)',
        '--line-chart-color': 'var(--secondary-accent)',
        '--globe-color': 'var(--tertiary-accent)',
        '--globe-lines': 'var(--primary-accent)',
        '--globe-blip-color': '#00FF00', /* Green blips */
        '--globe-hq-color': '#FF0032', /* Red HQs */
        '--bg-main': '#050505',
        '--text-primary': '#E0E0E0',
        '--text-secondary': '#A0A0A0',
        '--border-color': '#222222',
        '--card-bg': 'rgba(15, 15, 15, 0.9)',
        '--input-bg': '#1a1a1a',
        '--sidebar-bg': 'rgba(10, 10, 10, 0.85)',
        '--header-bg': '#0a0a0a',
        '--table-hover-bg': '#1a1a1a',
        '--table-border': '#333333',
        '--chart-bg': '#1a1a1a',
        '--scroll-track': '#1a1a1a',
    },
    'deep-ocean': {
        '--primary-accent': '#007BFF', /* Deep Blue */
        '--secondary-accent': '#00CED1', /* Dark Cyan */
        '--tertiary-accent': '#4169E1', /* Royal Blue */
        '--glow-color': 'rgba(0, 123, 255, 0.7)',
        '--glow-color-light': 'rgba(0, 123, 255, 0.3)',
        '--success-color': '#28A745',
        '--warning-color': '#FFC107',
        '--critical-color': '#DC3545',
        '--text-header-color': 'var(--primary-accent)',
        '--text-value-color': 'var(--secondary-accent)',
        '--text-secondary-value-color': 'var(--tertiary-accent)',
        '--button-gradient-start': 'var(--primary-accent)',
        '--button-gradient-end': 'var(--tertiary-accent)',
        '--button-hover-gradient-start': 'var(--tertiary-accent)',
        '--button-hover-gradient-end': 'var(--primary-accent)',
        '--input-border-color': 'var(--primary-accent)',
        '--input-focus-shadow': 'rgba(0, 206, 209, 0.3)',
        '--bar-chart-color': 'var(--primary-accent)',
        '--line-chart-color': 'var(--secondary-accent)',
        '--globe-color': 'var(--tertiary-accent)',
        '--globe-lines': 'var(--primary-accent)',
        '--globe-blip-color': '#28A745',
        '--globe-hq-color': '#DC3545',
        '--bg-main': '#020A18', /* Even darker blue-ish background */
        '--text-primary': '#D0E0F0',
        '--text-secondary': '#8090A0',
        '--border-color': '#1A2E4A',
        '--card-bg': 'rgba(5, 15, 30, 0.9)',
        '--input-bg': '#0A1E38',
        '--sidebar-bg': 'rgba(0, 10, 20, 0.85)',
        '--header-bg': '#020A18',
        '--table-hover-bg': '#0A1E38',
        '--table-border': '#1A2E4A',
        '--chart-bg': '#0A1E38',
        '--scroll-track': '#1A2E4A',
    },
    'emerald-matrix': {
        '--primary-accent': '#28A745', /* Emerald Green */
        '--secondary-accent': '#32CD32', /* Lime Green */
        '--tertiary-accent': '#008000', /* Dark Green */
        '--glow-color': 'rgba(40, 167, 69, 0.7)',
        '--glow-color-light': 'rgba(40, 167, 69, 0.3)',
        '--success-color': '#28A745',
        '--warning-color': '#FFC107',
        '--critical-color': '#DC3545',
        '--text-header-color': 'var(--primary-accent)',
        '--text-value-color': 'var(--secondary-accent)',
        '--text-secondary-value-color': 'var(--tertiary-accent)',
        '--button-gradient-start': 'var(--primary-accent)',
        '--button-gradient-end': 'var(--tertiary-accent)',
        '--button-hover-gradient-start': 'var(--tertiary-accent)',
        '--button-hover-gradient-end': 'var(--primary-accent)',
        '--input-border-color': 'var(--primary-accent)',
        '--input-focus-shadow': 'rgba(50, 205, 50, 0.3)',
        '--bar-chart-color': 'var(--primary-accent)',
        '--line-chart-color': 'var(--secondary-accent)',
        '--globe-color': 'var(--tertiary-accent)',
        '--globe-lines': 'var(--primary-accent)',
        '--globe-blip-color': '#32CD32',
        '--globe-hq-color': '#DC3545',
        '--bg-main': '#0A0A0A', /* Dark grey/black */
        '--text-primary': '#C0F0C0', /* Light green text */
        '--text-secondary': '#80A080',
        '--border-color': '#1A3A1A',
        '--card-bg': 'rgba(10, 25, 10, 0.9)',
        '--input-bg': '#0A1A0A',
        '--sidebar-bg': 'rgba(5, 15, 5, 0.85)',
        '--header-bg': '#0A0A0A',
        '--table-hover-bg': '#0A1A0A',
        '--table-border': '#1A3A1A',
        '--chart-bg': '#0A1A0A',
        '--scroll-track': '#1A3A1A',
    },
    'cosmic-violet': {
        '--primary-accent': '#6F42C1', /* Dark Violet */
        '--secondary-accent': '#E83E8C', /* Pink Magenta */
        '--tertiary-accent': '#8A2BE2', /* Blue Violet */
        '--glow-color': 'rgba(111, 66, 193, 0.7)',
        '--glow-color-light': 'rgba(111, 66, 193, 0.3)',
        '--success-color': '#20C997',
        '--warning-color': '#FD7E14',
        '--critical-color': '#E00040',
        '--text-header-color': 'var(--primary-accent)',
        '--text-value-color': 'var(--secondary-accent)',
        '--text-secondary-value-color': 'var(--tertiary-accent)',
        '--button-gradient-start': 'var(--primary-accent)',
        '--button-gradient-end': 'var(--tertiary-accent)',
        '--button-hover-gradient-start': 'var(--tertiary-accent)',
        '--button-hover-gradient-end': 'var(--primary-accent)',
        '--input-border-color': 'var(--primary-accent)',
        '--input-focus-shadow': 'rgba(232, 62, 140, 0.3)',
        '--bar-chart-color': 'var(--primary-accent)',
        '--line-chart-color': 'var(--secondary-accent)',
        '--globe-color': 'var(--tertiary-accent)',
        '--globe-lines': 'var(--primary-accent)',
        '--globe-blip-color': '#20C997',
        '--globe-hq-color': '#E00040',
        '--bg-main': '#0F051A', /* Dark purple-ish background */
        '--text-primary': '#F0E0FF',
        '--text-secondary': '#A080B0',
        '--border-color': '#2A103A',
        '--card-bg': 'rgba(20, 5, 30, 0.9)',
        '--input-bg': '#1A0A2A',
        '--sidebar-bg': 'rgba(10, 0, 20, 0.85)',
        '--header-bg': '#0F051A',
        '--table-hover-bg': '#1A0A2A',
        '--table-border': '#2A103A',
        '--chart-bg': '#1A0A2A',
        '--scroll-track': '#2A103A',
            }
        };

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = React.useState('dashboard');
    const [colorTheme, setColorTheme] = React.useState('godlike-tech');
    const [hiddenCompanies, setHiddenCompanies] = React.useState({});

    const changeColorTheme = (newTheme) => {
        setColorTheme(newTheme);
    };

    const toggleCompanyVisibility = (companyName) => {
        setHiddenCompanies(prev => ({
            ...prev,
            [companyName]: !prev[companyName]
        }));
    };

    const contextValue = {
        currentPage,
        setCurrentPage,
        colorTheme,
        changeColorTheme,
        hiddenCompanies,
        toggleCompanyVisibility
    };

    // Apply color palette to document root on theme change
    React.useEffect(() => {
        const root = document.documentElement;
        const currentPalette = colorPalettes[colorTheme];
        Object.entries(currentPalette).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
        document.body.className = 'dark'; // Ensure body always has 'dark' class
    }, [colorTheme]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

// --- Utility Functions for Data Generation ---
const generateRandomValue = (min, max) => (Math.random() * (max - min) + min);
const generateRandomInt = (min, max) => Math.floor(generateRandomValue(min, max));

const formatCurrency = (value) => {
    if (value >= 1000000000) {
        return `$${(value / 1000000000).toFixed(1)}B USD`;
    } else if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(1)}M USD`;
    }
    return `$${value.toLocaleString()} USD`;
};

// --- Components ---

// Header Component
const Header = () => {
    const { setCurrentPage } = React.useContext(AppContext);
    const [showLoginModal, setShowLoginModal] = React.useState(false);

    const handleAdminClick = () => {
        setShowLoginModal(true);
    };

    const handleLogin = (username, password) => {
        // !!! SECURITY WARNING: This is a simulated client-side login for demonstration ONLY.
        // !!! NEVER use this for real-world authentication. Credentials are hardcoded.
        if (username === 'admin' && password === 'admin') {
            setCurrentPage('settings');
            setShowLoginModal(false);
            return true;
        }
        return false;
    };

    return (
        <header className="relative z-10 py-6 px-4 sm:px-8 shadow-lg border-b bg-header-bg border-gray-800">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center mb-4 sm:mb-0">
                    <svg className="h-12 w-12 mr-3 text-glow animate-pulse text-primary-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.82L19.46 19H4.54L12 5.82zM11 10h2v4h-2zm0 5h2v2h-2z"/>
                    </svg>
                    <h1 className="text-4xl font-extrabold text-white text-glow logo-text-effect">PHOENIX PROTOCOL</h1>
                    <span className="ml-4 text-xl font-light hidden md:block text-primary-accent">Strategic Contracts Nexus V2</span>
                </div>
                <nav className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-sm font-medium">
                    <button onClick={() => setCurrentPage('dashboard')} className="rounded-md p-2 transition duration-300 text-primary-accent hover:text-white hover:bg-gray-800">Operational Dashboard</button>
                    <button onClick={() => setCurrentPage('congressional-trading')} className="rounded-md p-2 transition duration-300 text-primary-accent hover:text-white hover:bg-gray-800">Congressional Trading</button>
                    <button onClick={handleAdminClick} className="rounded-md p-2 transition duration-300 text-primary-accent hover:text-white hover:bg-gray-800 font-bold border border-primary-accent px-4 py-2 rounded-lg hover:bg-primary-accent hover:text-bg-main">System Admin</button>
                    <button className="nexus-button">Secure Log-Out</button>
                </nav>
            </div>
            {showLoginModal && <LoginModal onLogin={handleLogin} onClose={() => setShowLoginModal(false)} />}
        </header>
    );
};

// Login Modal Component
const LoginModal = ({ onLogin, onClose }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!onLogin(username, password)) {
            setError('Invalid credentials. Access denied.');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3 className="text-xl font-semibold mb-6 text-primary-accent">ADMIN ACCESS REQUIRED</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="nexus-input modal-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="nexus-input modal-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="modal-error">{error}</p>}
                    <button type="submit" className="modal-button mt-4">Login</button>
                    <button type="button" onClick={onClose} className="modal-button mt-2" style={{background: 'none', boxShadow: 'none', color: 'var(--text-primary)'}}>Cancel</button>
                </form>
                <p className="text-xs text-gray-500 mt-4">
                    <span className="font-bold text-critical-color">DEMO ONLY:</span> Use 'admin' for both username and password.
                </p>
            </div>
        </div>
    );
};


// Sidebar Component
const Sidebar = ({
    totalActive, currentValue, criticalPriority,
    ingestionRate, threatLevel, liveFeedMessages, liveContractAcquisitions
}) => {
    return (
        <aside className="lg:col-span-1 sidebar glow-border scanline-effect bg-sidebar-bg border-border-color">
            <h2 className="text-2xl font-semibold mb-6 text-glow typewriter text-white">OPERATIONAL OVERVIEW</h2>

            <div className="mb-8 ai-pulse nexus-card">
                <h3 className="text-xl font-semibold mb-4 text-primary-accent">AI ANALYTICS ENGINE</h3>
                <div id="ai-status" className="text-sm space-y-2">
                    <p className="text-green-500 flex items-center"><span className="loader mr-2"></span> Module: Predictive Forensics [Online]</p>
                    <p className="text-green-500 flex items-center"><span className="loader mr-2"></span> Module: Anomaly Detection [Online]</p>
                    <p className="text-orange-400 flex items-center"><span className="loader mr-2"></span> Data Ingestion Rate: <span id="ingestion-rate">{ingestionRate} TB/hr</span></p>
                    <p className={`flex items-center ${threatLevel >= 4 ? 'text-critical-color glitch' : (threatLevel === 3 ? 'text-warning-color' : 'text-success-color')}`}>
                        <span className="loader mr-2"></span> Threat Level: <span id="threat-level">{threatLevel >= 4 ? `CRITICAL - CODE RED (${threatLevel})` : (threatLevel === 3 ? `ELEVATED - ORANGE (${threatLevel})` : `STABLE - GREEN (${threatLevel})`)}</span>
                    </p>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary-accent">LIVE CONTRACT ACQUISITION FEED</h3>
                <div id="live-contract-feed" className="p-4 rounded-lg text-sm h-48 overflow-y-auto custom-scrollbar scanline-effect bg-gray-900">
                    {liveContractAcquisitions.map((contract, index) => (
                        <p key={index} className="mb-1 text-gray-300">
                            <span className="font-bold text-green-400">NEW:</span> {contract.company} - {formatCurrency(contract.value)} ({contract.sector})
                        </p>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-accent">SYSTEM DATA STREAM</h3>
                <div id="live-feed" className="p-4 rounded-lg text-sm h-48 overflow-y-auto custom-scrollbar scanline-effect bg-gray-900">
                    {liveFeedMessages.map((msg, index) => (
                        <p key={index} className="mb-1 opacity-0 animate-fade-in text-gray-300">{msg}</p>
                    ))}
                </div>
            </div>
        </aside>
    );
};

// Bar Chart Component
const BarChart = ({ data }) => {
    const maxValue = Math.max(...data.map(d => d.value));

    return (
        <div id="sector-spending-chart" className="chart-container flex items-end gap-3 bg-chart-bg">
            {data.map((item, index) => {
                const barHeight = (item.value / maxValue) * 100;
                return (
                    <div
                        key={index}
                        className="bar-chart-bar flex-grow relative flex flex-col items-center justify-end"
                        style={{ height: `${barHeight}%` }}
                    >
                        <span className="bar-chart-bar-value">{formatCurrency(item.value * 1000000000)}</span> {/* Display real numbers */}
                        <div className="bar-chart-bar-label">{item.sector}</div>
                    </div>
                );
            })}
        </div>
    );
};

// Line Chart Component
const LineChart = ({ data }) => {
    const maxVal = 5; // Max threat level
    const minVal = 1; // Min threat level
    const range = maxVal - minVal;

    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * 90 + 5; // Scale to 5-95 for padding
        const y = 100 - (((d.value - minVal) / range) * 80 + 10); // Scale to 10-90 range for padding
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="chart-container bg-chart-bg">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polyline className="line-chart-line" points={points}></polyline>
                {data.map((d, i) => {
                    const x = (i / (data.length - 1)) * 90 + 5;
                    const y = 100 - (((d.value - minVal) / range) * 80 + 10);
                    return (
                        <circle key={i} cx={x} cy={y} r="2.5" className="line-chart-point"></circle>
                    );
                })}
            </svg>
        </div>
    );
};

// 3D Globe Component
const Globe3D = () => {
    const mountRef = React.useRef(null);
    const { colorTheme } = React.useContext(AppContext);
    const contractBlipsRef = React.useRef([]); // Ref to store contract blip meshes
    const hqBlipsRef = React.useRef([]); // Ref to store HQ blip meshes

    React.useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        // Globe
        const geometry = new THREE.SphereGeometry(1.5, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(colorPalettes[colorTheme]['--globe-color']),
            wireframe: true,
            transparent: true,
            opacity: 0.7
        });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        // Simulated "connections" or "data flows"
        const numConnections = 20;
        const connectionColor = new THREE.Color(colorPalettes[colorTheme]['--globe-lines']);
        const connections = [];

        for (let i = 0; i < numConnections; i++) {
            const startLat = generateRandomValue(-90, 90);
            const startLon = generateRandomValue(-180, 180);
            const endLat = generateRandomValue(-90, 90);
            const endLon = generateRandomValue(-180, 180);

            const startPoint = latLonToCartesian(startLat, startLon, 1.5);
            const endPoint = latLonToCartesian(endLat, endLon, 1.5);

            const curve = new THREE.LineCurve3(startPoint, endPoint);
            const curveGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
            const curveMaterial = new THREE.LineBasicMaterial({ color: connectionColor, transparent: true, opacity: 0.5 });
            const line = new THREE.Line(curveGeometry, curveMaterial);
            scene.add(line);
            connections.push(line);
        }

        // Simulated Company HQs (fixed locations)
        const hqLocations = [
            { lat: 38.9072, lon: -77.0369, name: "Washington D.C." }, // General area for gov contractors
            { lat: 34.0522, lon: -118.2437, name: "Los Angeles" },
            { lat: 29.7604, lon: -95.3698, name: "Houston" },
            { lat: 40.7128, lon: -74.0060, name: "New York" },
            { lat: 33.7490, lon: -84.3880, name: "Atlanta" },
        ];

        const hqBlipMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(colorPalettes[colorTheme]['--globe-hq-color']), transparent: true, opacity: 0.8 });
        hqLocations.forEach(hq => {
            const pos = latLonToCartesian(hq.lat, hq.lon, 1.51); // Slightly above globe surface
            const hqBlip = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), hqBlipMaterial);
            hqBlip.position.copy(pos);
            hqBlip.name = `HQ-${hq.name}`;
            scene.add(hqBlip);
            hqBlipsRef.current.push(hqBlip); // Store for animation
        });


        // Simulated Contract Blips (dynamic, random locations)
        const numContractBlips = 50;
        const contractBlipMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(colorPalettes[colorTheme]['--globe-blip-color']), transparent: true, opacity: 0.8 });
        contractBlipsRef.current = []; // Clear previous blips
        for (let i = 0; i < numContractBlips; i++) {
            const lat = generateRandomValue(-70, 70); // Avoid poles for better visualization
            const lon = generateRandomValue(-180, 180);
            const pos = latLonToCartesian(lat, lon, 1.505); // Slightly above globe surface
            const blip = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 8), contractBlipMaterial);
            blip.position.copy(pos);
            blip.name = `Contract-${i}`;
            scene.add(blip);
            contractBlipsRef.current.push(blip); // Store for animation
        }

        // Convert lat/lon to Cartesian coordinates
        function latLonToCartesian(lat, lon, radius) {
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lon + 180) * (Math.PI / 180);
            const x = -(radius * Math.sin(phi) * Math.sin(theta));
            const y = radius * Math.cos(phi);
            const z = radius * Math.sin(phi) * Math.cos(theta);
            return new THREE.Vector3(x, y, z);
        }

        camera.position.z = 3;

        // Mouse interaction for rotation
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        const onMouseDown = (event) => {
            isDragging = true;
            previousMousePosition = { x: event.clientX, y: event.clientY };
        };

        const onMouseMove = (event) => {
            if (!isDragging) return;
            const deltaX = event.clientX - previousMousePosition.x;
            const deltaY = event.clientY - previousMousePosition.y;

            globe.rotation.y += deltaX * 0.005;
            globe.rotation.x += deltaY * 0.005;

            previousMousePosition = { x: event.clientX, y: event.clientY };
        };

        const onMouseUp = () => {
            isDragging = false;
        };

        currentMount.addEventListener('mousedown', onMouseDown);
        currentMount.addEventListener('mousemove', onMouseMove);
        currentMount.addEventListener('mouseup', onMouseUp);
        currentMount.addEventListener('mouseleave', onMouseUp); // Stop dragging if mouse leaves

        let animationFrameId;
        let time = 0;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            globe.rotation.y += 0.002; // Continuous slow rotation

            // Animate blips
            time += 0.05; // Increment time for animation
            const pulseScale = 1 + Math.sin(time) * 0.3; // Scale from 0.7 to 1.3
            const pulseOpacity = 0.5 + (Math.sin(time * 0.8) + 1) * 0.25; // Opacity from 0.5 to 1.0

            [...hqBlipsRef.current, ...contractBlipsRef.current].forEach(blip => {
                blip.scale.set(pulseScale, pulseScale, pulseScale);
                blip.material.opacity = pulseOpacity;
            });


            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            if (currentMount) {
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId); // Stop animation loop
            window.removeEventListener('resize', handleResize);
            currentMount.removeEventListener('mousedown', onMouseDown);
            currentMount.removeEventListener('mousemove', onMouseMove);
            currentMount.removeEventListener('mouseup', onMouseUp);
            currentMount.removeEventListener('mouseleave', onMouseUp);
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            connections.forEach(line => {
                line.geometry.dispose();
                line.material.dispose();
            });
            hqBlipMaterial.dispose();
            contractBlipMaterial.dispose();
            // Dispose of all blip geometries/materials if they were created uniquely
            scene.children.forEach(obj => {
                if (obj.isMesh) {
                    obj.geometry.dispose();
                    obj.material.dispose();
                }
            });
        };
    }, [colorTheme]); // Re-render if color theme changes

    return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing"></div>;
};


// Dashboard Page Component
const DashboardPage = () => {
    const { hiddenCompanies } = React.useContext(AppContext);

    const [totalActive, setTotalActive] = React.useState(12450);
    const [currentValue, setCurrentValue] = React.useState(87.2); // in Billions
    const [criticalPriority, setCriticalPriority] = React.useState(42);
    const [ingestionRate, setIngestionRate] = React.useState(1.2);
    const [threatLevel, setThreatLevel] = React.useState(3); // 1-5 scale, 5 being highest

    const [liveFeedMessages, setLiveFeedMessages] = React.useState([]);
    const [liveContractAcquisitions, setLiveContractAcquisitions] = React.useState([]);
    const [recentAwards, setRecentAwards] = React.useState([]);

    // Bar Chart Data (Spending by Sector) - now with simulated real values
    const [sectorData, setSectorData] = React.useState([
        { sector: "Defense", value: 45.2 }, // in Billions
        { sector: "IT", value: 20.8 },
        { sector: "Health", value: 15.5 },
        { sector: "Energy", value: 10.1 },
        { sector: "Logistics", value: 7.9 },
        { sector: "Other", value: 3.5 }
    ]);

    // Line Chart Data (Threat Level Trend)
    const [threatTrendData, setThreatTrendData] = React.useState([
        { month: 'Dec', value: 2 }, { month: 'Jan', value: 2.5 }, { month: 'Feb', value: 3 },
        { month: 'Mar', value: 2.8 }, { month: 'Apr', value: 3.5 }, { month: 'May', value: 4 }
    ]);

    // Simulated Top Contractors Data (more diverse sectors)
    const allContractors = [
        { id: 1, name: "Lockheed Martin", allocated: 19.2, engagements: 320, sector: "Defense & Aerospace", rating: "A+" },
        { id: 2, name: "Raytheon Technologies", allocated: 14.5, engagements: 280, sector: "Defense & Electronics", rating: "A" },
        { id: 3, name: "Northrop Grumman", allocated: 11.8, engagements: 210, sector: "Aerospace Systems", rating: "A" },
        { id: 4, name: "Amazon Web Services", allocated: 9.1, engagements: 150, sector: "Cloud Computing & IT", rating: "A+" },
        { id: 5, name: "General Dynamics", allocated: 8.7, engagements: 190, sector: "Land Systems & Naval", rating: "B+" },
        { id: 6, name: "Pfizer Inc.", allocated: 6.2, engagements: 85, sector: "Bio-Med & Pharma", rating: "A-" },
        { id: 7, name: "Bechtel Group", allocated: 5.9, engagements: 120, sector: "Infrastructure & Energy", rating: "B" },
        { id: 8, name: "Booz Allen Hamilton", allocated: 5.5, engagements: 110, sector: "Consulting & IT", rating: "A" },
        { id: 9, name: "General Electric", allocated: 4.8, engagements: 90, sector: "Energy & Aviation", rating: "B+" },
        { id: 10, name: "CACI International", allocated: 4.1, engagements: 75, sector: "IT & Cybersecurity", rating: "A-" },
    ];

    const getVisibleContractors = () => {
        return allContractors.filter(comp => !hiddenCompanies[comp.name]);
    };


    // Effects for real-time data simulation
    React.useEffect(() => {
        const updateMainStats = setInterval(() => {
            setTotalActive(prev => prev + generateRandomInt(-3, 7));
            setCurrentValue(prev => parseFloat((prev + generateRandomValue(-0.1, 0.2)).toFixed(1)));
            setCriticalPriority(prev => Math.min(60, Math.max(30, prev + generateRandomInt(-1, 3))));
            setIngestionRate(parseFloat(generateRandomValue(1.0, 1.5).toFixed(1)));
            setThreatLevel(prev => Math.min(5, Math.max(1, prev + generateRandomInt(-1, 2))));

            // Update sector data slightly
            setSectorData(prev => prev.map(s => ({
                ...s,
                value: parseFloat((s.value + generateRandomValue(-0.5, 0.5)).toFixed(1)) // Update with real numbers
            })));

            // Update threat trend data
            setThreatTrendData(prev => {
                const newTrend = [...prev];
                newTrend.shift(); // Remove oldest month
                newTrend.push({ month: 'Now', value: threatLevel }); // Add current threat level
                return newTrend;
            });

        }, 3000); // Every 3 seconds

        return () => clearInterval(updateMainStats);
    }, [threatLevel]); // Depend on threatLevel to update trend data

    React.useEffect(() => {
        const feedMessages = [
            "SYSTEM: Core integrity scan complete. No anomalies.",
            "INTELLIGENCE: New contract pipeline identified in Sector-7. Initiating deep-scan.",
            "NETWORK: External probe detected. Origin masked. Flagging for advanced analysis.",
            "DATASTREAM: Ingesting financial disclosures from Capitol Hill. Processing.",
            "AI: Predictive model updating for Q3 defense procurements. Confidence: 92%.",
            "OPERATIONS: New entity 'CyberForge Labs' onboarded. High-priority clearance.",
            "SYSTEM: Automated threat assessment: Stable. Monitoring external vectors.",
            "FINANCIALS: Capital reallocation protocol initiated. Sector: Energy.",
            "AI: Anomaly detected in Congressional Trading: Pattern deviation by Member R.",
            "SECURE: Biometric authentication confirmed. Access granted: Level 5."
        ];
        let messageIndex = 0;

        const addLiveFeedMessage = setInterval(() => {
            setLiveFeedMessages(prev => {
                const newMessage = `[${new Date().toLocaleTimeString('en-GB')}] ${feedMessages[messageIndex]}`;
                messageIndex = (messageIndex + 1) % feedMessages.length;
                return [newMessage, ...prev].slice(0, 10); // Keep last 10 messages
            });
        }, 2000);

        return () => clearInterval(addLiveFeedMessage);
    }, []);

    React.useEffect(() => {
        const sampleAwards = [
            { id: "DEFENSE-DELTA-0987", contractor: "Boeing Defense", agency: "DoD", value: 2.8, sector: "Defense & Aerospace", date: "2025-05-26" },
            { id: "IT-NEURON-5678", contractor: "Palantir Technologies", agency: "DoJ", value: 0.45, sector: "Cyber & IT Solutions", date: "2025-05-26" },
            { id: "HEALTH-GENOME-2345", contractor: "Johnson & Johnson", agency: "HHS", value: 0.72, sector: "Bio-Med & Healthcare", date: "2025-05-25" },
            { id: "ENERGY-GRID-9012", contractor: "NextEra Energy", agency: "DoE", value: 1.1, sector: "Energy & Infrastructure", date: "2025-05-25" },
            { id: "LOGI-EXPRESS-3456", contractor: "FedEx Government", agency: "GSA", value: 0.3, sector: "Logistics & Support", date: "2025-05-24" },
        ];
        let awardCounter = 0;

        const addRecentAward = setInterval(() => {
            setRecentAwards(prev => {
                const award = sampleAwards[awardCounter % sampleAwards.length];
                awardCounter++;
                return [award, ...prev].slice(0, 5); // Keep last 5 awards
            });
        }, 4000);

        return () => clearInterval(addRecentAward);
    }, []);

    // New: Live Contract Acquisitions Feed Data
    React.useEffect(() => {
        const acquisitionCompanies = ["Quantum Corp.", "CyberNexus Inc.", "BioGen Systems", "AeroDynamics", "Global Logistics Solutions"];
        const acquisitionSectors = ["IT", "Cybersecurity", "Biotech", "Aerospace", "Logistics"];
        let acquisitionCounter = 0;

        const addLiveAcquisition = setInterval(() => {
            setLiveContractAcquisitions(prev => {
                const newAcquisition = {
                    company: acquisitionCompanies[acquisitionCounter % acquisitionCompanies.length],
                    value: generateRandomValue(0.01, 0.5) * 1000000000, // 10M to 500M USD
                    sector: acquisitionSectors[acquisitionCounter % acquisitionSectors.length],
                    timestamp: new Date().toLocaleTimeString('en-GB')
                };
                acquisitionCounter++;
                return [newAcquisition, ...prev].slice(0, 7); // Keep last 7 acquisitions
            });
        }, 1500); // Faster updates for "ASAP" feel

        return () => clearInterval(addLiveAcquisition);
    }, []);


    return (
        <div className="flex-grow container mx-auto px-4 sm:px-8 py-10 relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <Sidebar
                totalActive={totalActive}
                currentValue={currentValue}
                criticalPriority={criticalPriority}
                ingestionRate={ingestionRate}
                threatLevel={threatLevel}
                liveFeedMessages={liveFeedMessages}
                liveContractAcquisitions={liveContractAcquisitions} /* Pass new data */
            />

            <section className="lg:col-span-3">
                {/* Search and Filter Bar */}
                <div className="nexus-card mb-8 p-6 glow-border">
                    <h2 className="text-2xl font-semibold mb-4 text-glow text-white">CONTRACT OVERSIGHT INTERFACE</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="text" placeholder="QUERY: Contract ID, Entity, Sector..." className="flex-grow nexus-input" />
                        <select className="nexus-input">
                            <option value="">ALL SECTORS</option>
                            <option value="defense">DEFENSE & AEROSPACE</option>
                            <option value="it">CYBER & IT SOLUTIONS</option>
                            <option value="health">BIO-MED & HEALTHCARE</option>
                            <option value="energy">ENERGY & INFRASTRUCTURE</option>
                            <option value="logistics">LOGISTICS & SUPPORT</option>
                        </select>
                        <button className="nexus-button">INITIATE SEARCH</button>
                    </div>
                </div>

                <div className="animated-line"></div>

                {/* Dashboard Widgets Grid (Bento Style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Widget 1: Active Contracts Overview */}
                    <div className="nexus-card glow-border">
                        <h3 className="text-xl font-semibold mb-4 text-white">ACTIVE DEPLOYMENTS</h3>
                        <div className="flex items-center justify-between mb-2">
                            <span className="data-label">Total Engagements:</span>
                            <span className="data-value text-green-400">{totalActive.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="data-label">Allocated Capital:</span>
                            <span className="data-value text-green-400">{formatCurrency(currentValue * 1000000000)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="data-label">Critical Priority:</span>
                            <span className="data-value text-critical-color">{criticalPriority}%</span>
                        </div>
                    </div>

                    {/* Widget 2: Recent Strategic Awards */}
                    <div className="nexus-card glow-border lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-4 text-white">RECENT STRATEGIC AWARDS</h3>
                        <ul id="recent-awards-list" className="space-y-3 h-32 overflow-y-auto custom-scrollbar">
                            {recentAwards.map((award, index) => (
                                <li key={index} className="border-b pb-2 last:border-b-0 border-gray-700 text-gray-300">
                                    <p className="data-value text-sm text-primary-accent">CONTRACT-ID: {award.id}</p>
                                    <p className="text-xs text-gray-400">ENTITY: <span className="text-orange-400">{award.contractor}</span> | VALUE: <span className="text-green-400">{formatCurrency(award.value * 1000000000)}</span> | SECTOR: {award.sector} | DATE: {award.date}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Widget 3: Spending by Sector - Bar Chart */}
                    <div className="nexus-card glow-border lg:col-span-1">
                        <h3 className="text-xl font-semibold mb-4 text-white">CAPITAL ALLOCATION BY SECTOR (USD)</h3>
                        <BarChart data={sectorData} />
                    </div>

                    {/* Widget 4: Threat Level Analysis - Line Chart */}
                    <div className="nexus-card glow-border lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-4 text-white">THREAT LEVEL INDEX (LAST 6 MONTHS)</h3>
                        <LineChart data={threatTrendData} />
                    </div>
                </div>

                {/* Top Contractors - Expanded List */}
                <div className="nexus-card glow-border mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">TOP OPERATIONAL ENTITIES (FY2025)</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-300">
                            <thead>
                                <tr className="border-b uppercase border-gray-700 text-primary-accent">
                                    <th className="py-2 px-4">RANK</th>
                                    <th className="py-2 px-4">ENTITY NAME</th>
                                    <th className="py-2 px-4">TOTAL ALLOCATED</th>
                                    <th className="py-2 px-4">ACTIVE ENGAGEMENTS</th>
                                    <th className="py-2 px-4">PRIMARY SECTOR</th>
                                    <th className="py-2 px-4">PERFORMANCE RATING</th>
                                </tr>
                            </thead>
                            <tbody id="top-contractors-table">
                                {getVisibleContractors().map(contractor => (
                                    <tr key={contractor.id} className="transition duration-200 border-b border-gray-800 hover:bg-gray-800">
                                        <td className="py-2 px-4">{contractor.id}</td>
                                        <td className="py-2 px-4 text-orange-400">{contractor.name}</td>
                                        <td className="py-2 px-4 text-green-400">{formatCurrency(contractor.allocated * 1000000000)}</td>
                                        <td className="py-2 px-4">{contractor.engagements}</td>
                                        <td className="py-2 px-4">{contractor.sector}</td>
                                        <td className={`py-2 px-4 ${contractor.rating.includes('A') ? 'text-green-500' : 'text-yellow-500'}`}>{contractor.rating}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3D Globe for Contract Distribution */}
                <div className="nexus-card glow-border mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">GLOBAL CONTRACT DISTRIBUTION (SIMULATED)</h3>
                    <div className="w-full h-64 bg-gray-900 rounded-lg flex items-center justify-center text-gray-500 text-lg">
                        <Globe3D />
                    </div>
                </div>
            </section>
        </div>
    );
};

// Congressional Trading Page Component
const CongressionalTradingPage = () => {
    const [congressTrades, setCongressTrades] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filterType, setFilterType] = React.useState('all');

    // Simulated congressional trading data
    const allCongressTrades = [
        { type: "BUY", value: "$50K-100K", ticker: "RTX (Raytheon)", member: "Sen. P. Jones", party: "R", state: "FL", committee: "Armed Services", date: "2025-05-26", conflict: "Defense Committee" },
        { type: "SELL", value: "$1M-5M", ticker: "GOOGL (Alphabet)", member: "Rep. S. Khan", party: "D", state: "CA", committee: "Tech Subcommittee", date: "2025-05-25", conflict: "Tech Subcommittee" },
        { type: "BUY", value: "$10K-50K", ticker: "PLTR (Palantir)", member: "Sen. A. Davis", party: "I", state: "OH", committee: "Intelligence Oversight", date: "2025-05-24", conflict: "Intelligence Oversight" },
        { type: "BUY", value: "$1K-15K", ticker: "CVX (Chevron)", member: "Rep. C. Miller", party: "R", state: "WY", committee: "Energy & Commerce", date: "2025-05-23", conflict: "Energy & Commerce" },
        { type: "SELL", value: "$250K-500K", ticker: "JNJ (J&J)", member: "Sen. E. White", party: "D", state: "GA", committee: "Health Committee", date: "2025-05-22", conflict: "Health Committee" },
        { type: "BUY", value: "$50K-100K", ticker: "LMT (Lockheed Martin)", member: "Rep. J. Doe", party: "D", state: "CA", committee: "Armed Services", date: "2025-05-22", conflict: "Defense Committee" },
        { type: "SELL", value: "$50K-100K", ticker: "PFE (Pfizer)", member: "Sen. A. Smith", party: "R", state: "TX", committee: "Health Subcommittee", date: "2025-05-21", conflict: "Health Subcommittee" },
        { type: "BUY", value: "$1K-15K", ticker: "AMZN (Amazon)", member: "Rep. M. Garcia", party: "I", state: "NY", committee: "Small Business", date: "2025-05-20", conflict: "None evident" },
        { type: "BUY", value: "$100K-250K", ticker: "BA (Boeing)", member: "Sen. T. Brown", party: "D", state: "WA", committee: "Commerce, Science, and Transportation", date: "2025-05-19", conflict: "Aerospace Industry" },
        { type: "SELL", value: "$15K-50K", ticker: "XOM (ExxonMobil)", member: "Rep. K. Lee", party: "R", state: "TX", committee: "Natural Resources", date: "2025-05-18", conflict: "Oil & Gas Industry" },
    ];

    React.useEffect(() => {
        // Simulate real-time updates for congressional trades
        let tradeIndex = 0;
        const addCongressTrade = setInterval(() => {
            setCongressTrades(prev => {
                const trade = allCongressTrades[tradeIndex % allCongressTrades.length];
                tradeIndex++;
                return [trade, ...prev].slice(0, 10); // Keep last 10 trades
            });
        }, 6000); // Add new trade every 6 seconds

        return () => clearInterval(addCongressTrade);
    }, []);

    const filteredTrades = congressTrades.filter(trade => {
        const matchesSearch = searchTerm === '' ||
                              trade.member.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              trade.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              trade.committee.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilterType = filterType === 'all' ||
                                  (filterType === 'buy' && trade.type === 'BUY') ||
                                  (filterType === 'sell' && trade.type === 'SELL');
        return matchesSearch && matchesFilterType;
    });

    const getConflictRisk = (conflict) => {
        if (conflict.includes('Defense') || conflict.includes('Armed Services') || conflict.includes('Intelligence')) return 'HIGH RISK';
        if (conflict.includes('Tech') || conflict.includes('Energy') || conflict.includes('Health') || conflict.includes('Industry')) return 'MODERATE RISK';
        return 'LOW RISK';
    };

    const getConflictColor = (risk) => {
        switch (risk) {
            case 'HIGH RISK': return 'text-critical-color';
            case 'MODERATE RISK': return 'text-warning-color';
            case 'LOW RISK': return 'text-success-color';
            default: return 'text-gray-500';
        }
    };

    return (
        <div className="flex-grow container mx-auto px-4 sm:px-8 py-10 relative z-10">
            <div className="nexus-card glow-border mb-8 ai-pulse">
                <h3 className="text-xl font-semibold mb-4 text-glow text-white">CONGRESSIONAL TRADING: CONFLICT MATRIX</h3>
                <p className="text-sm mb-6 text-gray-400">Monitoring publicly disclosed financial transactions by members of Congress and their immediate families against active government contracts for potential conflict identification. Data updated per STOCK Act disclosure requirements.</p>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Search Member, Ticker, Committee..."
                        className="flex-grow nexus-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="nexus-input"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="all">All Transactions</option>
                        <option value="buy">Buys</option>
                        <option value="sell">Sells</option>
                    </select>
                    <button className="nexus-button">APPLY FILTER</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary-accent">RECENT PTR ALERTS (Periodic Transaction Reports)</h4>
                        <ul id="congress-trades-list" className="space-y-3 h-64 overflow-y-auto custom-scrollbar">
                            {filteredTrades.length > 0 ? (
                                filteredTrades.map((trade, index) => (
                                    <li key={index} className="border-b pb-2 last:border-b-0 border-gray-700 text-gray-300">
                                        <p className="text-sm"><span className={`font-bold ${trade.type === 'BUY' ? 'text-green-400' : 'text-critical-color'}`}>{trade.type}: {trade.value}</span> | TICKER: <span className="text-orange-400">{trade.ticker}</span></p>
                                        <p className="text-xs text-gray-500">Member: {trade.member} ({trade.party}-{trade.state}) | Date: {trade.date} | Committee: {trade.committee}</p>
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-500">No trades found matching criteria.</p>
                            )}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary-accent">CONFLICT OVERLAY (SIMULATED)</h4>
                        <div className="p-4 rounded-lg h-64 overflow-y-auto custom-scrollbar bg-gray-900">
                            {filteredTrades.length > 0 ? (
                                filteredTrades.map((trade, index) => {
                                    const risk = getConflictRisk(trade.conflict);
                                    const colorClass = getConflictColor(risk);
                                    return (
                                        <p key={index} className={`text-sm mb-2 font-bold ${colorClass}`}>
                                            {risk}: {trade.member} owns/traded shares in {trade.ticker}, active on {trade.committee} Committee.
                                        </p>
                                    );
                                })
                            ) : (
                                <p className="text-gray-500">No potential conflicts to display based on current filters.</p>
                            )}
                            <p className="text-xs text-gray-500 mt-4">Note: This module provides simulated analysis based on publicly available data. Further investigation required for definitive conflict assessment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Settings Page Component
const SettingsPage = () => {
    const { colorTheme, changeColorTheme, hiddenCompanies, toggleCompanyVisibility } = React.useContext(AppContext);

    const availableCompanies = [
        "Lockheed Martin", "Raytheon Technologies", "Northrop Grumman",
        "Amazon Web Services", "General Dynamics", "Pfizer Inc.",
        "Bechtel Group", "Booz Allen Hamilton", "General Electric", "CACI International"
    ];

    const availableColorThemes = {
        'godlike-tech': 'Godlike Tech (Default)',
        'deep-ocean': 'Deep Ocean',
        'emerald-matrix': 'Emerald Matrix',
        'cosmic-violet': 'Cosmic Violet'
    };

    return (
        <div className="flex-grow container mx-auto px-4 sm:px-8 py-10 relative z-10">
            <div className="nexus-card glow-border mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-glow text-white">SYSTEM CONFIGURATION</h2>

                {/* Theme Settings */}
                <div className="mb-8 p-4 border border-border-color rounded-md">
                    <h3 className="text-xl font-semibold mb-4 text-primary-accent">DISPLAY THEME</h3>
                    <div className="mb-4">
                        <label htmlFor="color-theme-select" className="block text-sm font-medium mb-2 text-gray-300">Choose Color Palette:</label>
                        <select
                            id="color-theme-select"
                            className="nexus-input w-full md:w-1/2"
                            value={colorTheme}
                            onChange={(e) => changeColorTheme(e.target.value)}
                        >
                            {Object.entries(availableColorThemes).map(([key, name]) => (
                                <option key={key} value={key}>{name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Company Visibility Settings */}
                <div className="mb-8 p-4 border border-border-color rounded-md">
                    <h3 className="text-xl font-semibold mb-4 text-primary-accent">CONTRACTOR VISIBILITY</h3>
                    <p className="text-sm mb-4 text-gray-400">Toggle visibility for major contractors on the dashboard:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {availableCompanies.map(company => (
                            <div key={company} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={`company-toggle-${company}`}
                                    className="h-4 w-4 text-primary-accent rounded focus:ring-primary-accent"
                                    checked={!hiddenCompanies[company]}
                                    onChange={() => toggleCompanyVisibility(company)}
                                />
                                <label htmlFor={`company-toggle-${company}`} className="ml-2 text-sm font-medium text-gray-300">
                                    {company}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Settings (Placeholders) */}
                <div className="mb-8 p-4 border border-border-color rounded-md">
                    <h3 className="text-xl font-semibold mb-4 text-primary-accent">ADVANCED SETTINGS</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="refresh-rate" className="block text-sm font-medium mb-1 text-gray-300">Data Refresh Rate (Simulated):</label>
                            <select id="refresh-rate" className="nexus-input w-full md:w-1/3">
                                <option value="3s">3 Seconds</option>
                                <option value="5s">5 Seconds</option>
                                <option value="10s">10 Seconds</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="notifications" className="block text-sm font-medium mb-1 text-gray-300">Notification Preferences:</label>
                            <select id="notifications" className="nexus-input w-full md:w-1/3">
                                <option value="all">All Critical Alerts</option>
                                <option value="major">Major Alerts Only</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className="nexus-button">APPLY SETTINGS</button>
            </div>
        </div>
    );
};


// Main App Component
const App = () => {
    const { currentPage } = React.useContext(AppContext);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="bg-grid"></div>
            <Header />

            {/* Render current page based on state */}
            {(() => {
                switch (currentPage) {
                    case 'dashboard':
                        return <DashboardPage />;
                    case 'congressional-trading':
                        return <CongressionalTradingPage />;
                    case 'settings':
                        return <SettingsPage />;
                    default:
                        return <DashboardPage />;
                }
            })()}

            {/* Footer Section */}
            <footer className="relative z-10 py-6 px-4 sm:px-8 text-center text-xs border-t mt-10 text-gray-500 border-gray-800">
                <p>&copy; 2025 PHOENIX PROTOCOL. All rights reserved. | Strategic Data Initiative | <span className="glitch">SECURITY LEVEL: ALPHA</span></p>
                <p className="mt-2">Deployed by: U.S. National Intelligence Directorate (Simulated)</p>
            </footer>
        </div>
    );
};

// Export the main App component wrapped in the Provider
// This is the entry point for ReactDOM.createRoot
const ProvidedApp = () => (
    <AppProvider>
        <App />
    </AppProvider>
);

// Render the App
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<ProvidedApp />);

