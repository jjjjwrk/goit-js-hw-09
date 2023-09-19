const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay })
      } else {
        // Reject
        reject ({ position, delay });
      }
    }, delay);
  })
}

form.addEventListener('submit', onSubmit);

function onSubmit(event){
  event.preventDefault();
  let userDelay = Number(event.currentTarget.delay.value);
  let step = Number(event.currentTarget.step.value);
  let amount = Number(event.currentTarget.amount.value);

  if(userDelay < 0 || step < 0 || amount <= 0){
    alert('error');
    event.currentTarget.reset();
    return;
  }

  for(let i = 1; i <= amount; i += 1){
    createPromise(i, userDelay).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
    }).catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    userDelay += step;
  };
};

