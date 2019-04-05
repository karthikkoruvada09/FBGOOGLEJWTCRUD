

  constructor(private router: Router, private ser: ServeService) {
  }
  special() {
    this.check();
    this.initListener();
    this.initInterval();
    this.lastAction = Date.now();      //this is must
  }
  ////AUTO LOGOUT CODE
  MINUTES_UNITL_AUTO_LOGOUT = 10 // in mins    //i am not using this
  CHECK_INTERVAL = 3000 // in ms
  STORE_KEY = 'lastAction';

  get lastAction() {
    return parseInt(localStorage.getItem(this.STORE_KEY));
  }
  set lastAction(value: number) {
    localStorage.setItem(this.STORE_KEY, String(value));
  }

  initListener() {
   document.body.addEventListener('click', () => this.reset());
     document.body.addEventListener('keypress', () => this.reset());
  }

  reset() {
    this.lastAction = Date.now();
  }


  intervalId;
  initInterval() {
    this.intervalId = setInterval(() => {
        this.check();
    }, this.CHECK_INTERVAL);
  }


  check() {
    const now = Date.now();
    const timeleft = this.lastAction + 15000;              // this.MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000   ------i kept directly the seconds here    autologout time=15 sec
    const diff = timeleft - now;
    const isTimeout = diff < 0;
    if (isTimeout && this.ser.getToken()) {    
      clearInterval(this.intervalId);         //additionally checking  token also here but not necessary    anyhow this wont be called without logging in
      this.router.navigate(['/login']);
    }
  }

