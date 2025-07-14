import{s as d,x as l,a as p,b as g,t as c,e as u}from"./index-a785bda7.js";var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,h=(o,t,s,i)=>{for(var e=i>1?void 0:i?y(t,s):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(e=(i?a(t,s,e):a(e))||e);return i&&e&&m(t,s,e),e};let n=class extends d{constructor(){super(...arguments),this.lang=navigator.language.startsWith("de")?"de":"en"}render(){return l`
      <app-header ?enableBack="${!0}"></app-header>
      <main>
          ${this.lang==="de"?l`
            <h2>Wofür ist SelfLock.online:</h2>
            <p>Mit SelfLock.online können Sie Ihren Windows-PC von unterwegs sperren – bequem per Smartphone, ohne zum Rechner zurücklaufen zu müssen. Viele Firmen schreiben dieses Verhalten in ihren Sicherheitsrichtlinien vor. Erhöhte Systemrechte sind nicht notwendig.</p>

            <h3>Installation:</h3>
            <p>Laden Sie die SelfLock-App herunter und installieren Sie sie auf Ihrem Windows-PC. Während der Installation werden Sie gefragt, ob die App automatisch mit Windows gestartet werden soll. Diese Einstellung lässt sich später im Kontextmenü der Systray-App ändern.</p>
            
            <a href="../SelfLockInstaller.exe" download style="text-decoration:none;">
              <sl-button size="small" variant="default">
                <span slot="prefix" style="display:inline-flex;align-items:center;">
                  <svg width="18" height="18" viewBox="0 0 24 24" style="margin-right:4px;margin-top:3px;vertical-align:middle;" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="8" height="8" fill="#00ADEF"/>
                    <rect x="11" y="1" width="8" height="8" fill="#00ADEF"/>
                    <rect x="1" y="11" width="8" height="8" fill="#00ADEF"/>
                    <rect x="11" y="11" width="8" height="8" fill="#00ADEF"/>
                  </svg>
                </span>
                Windows-Anwendung herunterladen
              </sl-button>
            </a>

            <h3>Verbindungsstatus:</h3>
            <figure style="text-align:center;text-size:10px;">
              <img src="../../assets/images/connection.png" alt="Systray icon on Windows" loading="lazy" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.15);" />
            </figure>
            <p>Nach dem Start zeigt das Systray-Icon den Verbindungsstatus an:
              <ul>
                <li>Grün: Verbindung zum Server besteht.</li>
                <li>Rot: Verbindung unterbrochen. In diesem Fall wird eine Windows-Benachrichtigung angezeigt.</li>
              </ul>
            </p>

            <h3>Geräte-Pairing:</h3>
            <figure style="text-align:center;text-size:10px;">
              <img src="../../assets/images/pairing.png" alt="Systray icon on Windows" loading="lazy" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.15);" />
            </figure>
            <p>Öffnen Sie über das Kontextmenü der Systray-App den Remote-Pairing-Dialog. Dort können Sie:
              <ul>
                <li>Den QR-Code mit der Handykamera scannen,</li>
                <li>Die Geräte-ID manuell kopieren,</li>
                <li>Oder die URL mit Übergabeparametern kopieren und im Browser speichern.</li>
              </ul>
              Die Informationen werden im LocalStorage des Browsers gespeichert. Inkognito-Tabs speichern diese Daten nicht dauerhaft.
            </p>

            <h3>Weboberfläche:</h3>
            <figure style="text-align:center;text-size:10px;">
            <picture>
              <source srcset="../../assets/images/website-dark.png" media="(prefers-color-scheme: dark)">
              <source srcset="../../assets/images/website-light.png" media="(prefers-color-scheme: light)">
              <img src="../../assets/images/website-light.png" alt="Systray icon on Windows" loading="lazy" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.15);" />
            </picture>
            </figure>
            <p>Auf selflock.online sehen Sie:
              <ul>
                <li>Ob der lokale Benutzer den Rechner entsperrt hat,</li>
                <li>Ob der Rechner online ist,</li>
                <li>Und Sie können den Rechner aus der Ferne sperren.</li>
              </ul>
            </p>
          `:l`
            <h2>Why SelfLock.online exists:</h2>
            <p>With SelfLock.online, you can lock your Windows PC remotely via your smartphone, without needing to return to your desk. Many companies require this in their security guidelines. No elevated system rights are required.</p>

            <h3>Installation</h3>
            <p>Download the SelfLock app and install it on your Windows PC. During installation, you'll be asked whether the app should start automatically with Windows. You can change this setting later via the system tray app's context menu.</p>

            <a href="/SelfLockInstaller.exe" download style="text-decoration:none;">
              <sl-button size="small" variant="default">
                <span slot="prefix" style="display:inline-flex;align-items:center;">
                  <svg width="18" height="18" viewBox="0 0 24 24" style="margin-right:4px;margin-top:3px;vertical-align:middle;" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="8" height="8" fill="#00ADEF"/>
                    <rect x="11" y="1" width="8" height="8" fill="#00ADEF"/>
                    <rect x="1" y="11" width="8" height="8" fill="#00ADEF"/>
                    <rect x="11" y="11" width="8" height="8" fill="#00ADEF"/>
                  </svg>
                </span>
                Download Windows application
              </sl-button>
            </a>

            <h3>Connection Status</h3>
            <figure style="text-align:center;text-size:10px;">
              <img src="../../assets/images/connection.png" alt="Systray icon on Windows" loading="lazy" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.15);" />
            </figure>
            <p>Once running, the system tray icon shows the connection status:
              <ul>
                <li>Green: Connection to the server is active.</li>
                <li>Red: Connection is interrupted. In this case, a Windows notification is shown.</li>
              </ul>
            </p>

            <h3>Device Pairing</h3>
            <figure style="text-align:center;text-size:10px;">
              <img src="../../assets/images/pairing.png" alt="Systray icon on Windows" loading="lazy" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.15);" />
            </figure>
            <p>Open the Remote Pairing dialog via the system tray app’s context menu. You can:
              <ul>
                <li>Scan the QR code with your phone,</li>
                <li>Copy the device ID manually,</li>
                <li>Or copy the URL with parameters to store the machine in your browser.</li>
              </ul>
              This information is saved in your browser’s LocalStorage. Incognito tabs do not retain this data after closing.
            </p>

            <h3>Web Interface:</h3>
            <figure style="text-align:center;text-size:10px;">
            <picture>
              <source srcset="../../assets/images/website-dark.png" media="(prefers-color-scheme: dark)">
              <source srcset="../../assets/images/website-light.png" media="(prefers-color-scheme: light)">
              <img src="../../assets/images/website-light.png" alt="Systray icon on Windows" loading="lazy" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.15);" />
            </picture>
            </figure>
            <p>On selflock.online you can:
              <ul>
                <li>See if the local user has unlocked the PC,</li>
                <li>Check if the PC is online,</li>
                <li>And lock the PC remotely.</li>
              </ul>
            </p>
          `}
      </main>
      <app-footer></app-footer>
    `}};n.styles=[p,g];h([c()],n.prototype,"lang",2);n=h([u("app-help")],n);export{n as AppHelp};
//# sourceMappingURL=app-help-fb0e0f79.js.map
