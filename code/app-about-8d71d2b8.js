import{i,s as l,x as p,a as d,e as m}from"./index-93562f06.js";const u=i`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
      margin-left: 25px;
      margin-right: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
  }
`;var y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,h=(c,r,a,t)=>{for(var e=t>1?void 0:t?f(r,a):r,n=c.length-1,s;n>=0;n--)(s=c[n])&&(e=(t?s(r,a,e):s(e))||e);return t&&e&&y(r,a,e),e};let o=class extends l{render(){return p`
      <app-header ?enableBack="${!0}"></app-header>

      <main>
        <sl-card>
          <h2>Your Personal Screen Lock Assistant</h2>
          SelfLock is your reliable screen lock assistant.<br>
          To add new devices, simply scan the QR code using your device camera <br>
          or click the Add button and enter your ID from the system tray program.<br>
          <p>
          SelfLock comes to your aid when you accidentally leave your Windows PC unattended.<br>
          With SelfLock, you can remotely lock your machine from anywhere.
          </p>

          <p>Stay secure with SelfLock!</p>
        </sl-card>
      </main>
    `}};o.styles=[d,u];o=h([m("app-about")],o);export{o as AppAbout};
//# sourceMappingURL=app-about-8d71d2b8.js.map
