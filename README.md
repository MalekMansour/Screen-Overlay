# System Overlay

A lightweight HTML, CSS, and JavaScript-based system overlay that displays real-time system statistics, including date, time, FPS, CPU usage, GPU usage, battery level, and volume.

## Features
- Fixed overlay bar at the top of the screen.
- Displays essential system stats.
- Compact and minimal design.

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/MalekMansour/Screen-Overlay
   ```
2. Open the `index.html` file in your browser.

## Usage
- Ensure that `renderer.js` is properly linked to handle data updates.
- Customize the `overlay-bar` styles in the CSS section as needed.
- Modify `renderer.js` to fetch and display real-time system statistics.

## File Structure
```
/system-overlay
│── index.html       # Main HTML file with the overlay structure
│── renderer.js      # JavaScript file for handling system stats
```

## Future Improvements
- Implement real-time FPS tracking.
- Add CPU and GPU monitoring via JavaScript APIs.
- Fetch battery and volume levels dynamically.

## License
This project is licensed under the MIT License.

## Author
Malek Mansour

