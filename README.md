# Network Info Extension

This browser extension provides detailed information about your current network connection. It offers insights into various aspects of your internet connection, helping users understand their network environment better.

## Features

- Check Network Connection Type based on speed
- Monitor Network Downlink (Download speed)
- Measure Round-Trip Time (RTT)
- Determine Network Type (WiFi or Not)
- Detect NAT Type
- Display Local IP Address
- Show Public IP Address

### Detailed Feature Breakdown

#### 1. Network Connection Type
The extension categorizes your connection based on the effective type reported by the browser:
- 4G: High-speed connections
- 3G: Medium-speed connections
- 2G: Low-speed connections
- slow-2g: Very slow connections

#### 2. Network Downlink
Displays the estimated downlink speed of your current connection in Mbps (Megabits per second). This gives you an idea of your potential download speeds.

#### 3. Round-Trip Time (RTT)
Shows the estimated time in milliseconds for a data packet to travel from your browser to the server and back. Lower RTT generally indicates a more responsive connection.

#### 4. NAT Type Detection
Identifies the Network Address Translation (NAT) type of your connection:
- Open Internet: Direct connection to the internet
- Full-cone NAT: Most permissive type of NAT
- Symmetric NAT: Most restrictive type of NAT
This information can be crucial for peer-to-peer applications and online gaming.

#### 5. Local IP Address
Displays your device's local IP address on the network. This can be useful for local network troubleshooting.

#### 6. Public IP Address
Shows your public IP address as seen by the internet. This can be helpful for various network-related tasks and troubleshooting.

## How It Works

1. The extension uses the Network Information API to gather basic connection details.
2. It employs WebRTC (Real-Time Communication) to detect the NAT type and local IP address.
3. An external API call is made to determine the public IP address.

## Privacy Considerations

- The extension only accesses network information when the popup is opened.
- No data is stored or transmitted, except for the necessary API call to fetch the public IP address.
- Users should be aware that displaying the public IP might have privacy implications.

## Installation

1. Download the extension files.
2. Open your browser's extension management page.
3. Enable "Developer mode".
4. Click "Load unpacked" and select the folder containing the extension files.

## Usage

Click on the extension icon in your browser toolbar to open the popup and view your current network information.

## Permissions

The extension requires the following permissions:
- `storage`: To save user preferences (if implemented in future versions).
- `activeTab`: To access the current tab's information.

## Compatibility

This extension is designed for Chromium-based browsers (Chrome, Edge, Brave, etc.) using Manifest V3.

## Contributing

Contributions to improve the extension are welcome. Please feel free to submit issues or pull requests.

## License

MIT License

Copyright (c) 2024 Ahmad Takkoush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Disclaimer

This extension is for informational purposes only. The accuracy of the information provided depends on the browser's capabilities and the network environment.