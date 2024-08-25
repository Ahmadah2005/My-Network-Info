document.addEventListener('DOMContentLoaded', function() {
  const networkInfoDiv = document.getElementById('network-info');
  
  function updateNetworkInfo() {
      if ('connection' in navigator && 'effectiveType' in navigator.connection) {
          const connection = navigator.connection;
          const effectiveType = connection.effectiveType;
          const downlink = connection.downlink || 'unknown';
          const rtt = connection.rtt || 'unknown';
          
          networkInfoDiv.innerHTML = `
              <p><strong>Effective Connection Type:</strong> ${effectiveType}</p>
              <p><strong>Downlink:</strong> ${downlink} Mbps</p>
              <p><strong>RTT:</strong> ${rtt} ms</p>
          `;

          detectNatType();
          detectLocalIPAddress();
          detectPublicIP();
      } else {
          networkInfoDiv.innerHTML = '<p>Network Information API not supported.</p>';
      }
  }

  function detectNatType() {
      const servers = {
          iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
      };
      const pc = new RTCPeerConnection(servers);
  
      pc.createDataChannel('');
      pc.createOffer().then(offer => pc.setLocalDescription(offer));
      
      pc.onicecandidate = (event) => {
          if (event && event.candidate && event.candidate.candidate) {
              const candidate = event.candidate.candidate;
              const type = candidate.includes('typ relay') ? 'Symmetric NAT' :
                           candidate.includes('typ srflx') ? 'Full-cone NAT' :
                           candidate.includes('typ host') ? 'Open Internet' :
                           'Unknown';
              networkInfoDiv.innerHTML += `<p><strong>NAT Type:</strong> ${type}</p>`;
              pc.close();
          }
      };
  }

  function detectLocalIPAddress() {
      const pc = new RTCPeerConnection({ iceServers: [] });
      pc.createDataChannel('');
      pc.createOffer().then(offer => pc.setLocalDescription(offer));
      
      pc.onicecandidate = (event) => {
          if (event && event.candidate && event.candidate.candidate) {
              const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
              const match = ipRegex.exec(event.candidate.candidate);
              if (match) {
                  const ip = match[1];
                  updateWithIPInfo(ip);
              }
              pc.close();
          }
      };
  }

  function updateWithIPInfo(ip) {
      const isPrivateIP = /^(10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.)/.test(ip);
      networkInfoDiv.innerHTML += `
          <p><strong>Local IP:</strong> ${ip}</p>
          <p><strong>IP Type:</strong> ${isPrivateIP ? 'Private' : 'Public'}</p>
      `;
  }

  function detectPublicIP() {
      fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => {
              networkInfoDiv.innerHTML += `<p><strong>Public IP:</strong> ${data.ip}</p>`;
          })
          .catch(error => {
              console.error('Error fetching public IP:', error);
              networkInfoDiv.innerHTML += '<p><strong>Public IP:</strong> Unable to fetch</p>';
          });
  }

  updateNetworkInfo();

  if ('connection' in navigator && 'addEventListener' in navigator.connection) {
      navigator.connection.addEventListener('change', updateNetworkInfo);
  }

  document.getElementById('fetch-info').addEventListener('click', updateNetworkInfo);
});