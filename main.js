const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
    
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdownH = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      let d = parseInt(t.remainHours);
      let hl = t.remainDays * 24;
      let h = parseInt(hl);
      let fhl = d + h;
      el.innerHTML = `<span style="color: green;"> ${fhl}h  </span> hours left`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };

  const countdownD = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `<span style="color: green;"> ${t.remainDays}</span> days left`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };

  const countdownT = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `<span style="color: green;"> ${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s </span>`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };



  
  countdownH('July 27 2020 00:1:00 GMT-1400', 'clock', '¡Ya termino!');
  countdownD('July 27 2020 00:1:00 GMT-1400', 'days', '¡Ya termino!');
  countdownT('July 27 2020 00:1:00 GMT-1400', 'total', '¡Ya termino!');

  