!function(){function e(e,t){return new Promise((function(n,r){var o=Math.random()>.3;setTimeout((function(){o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=Number(t.currentTarget.delay.value),r=Number(t.currentTarget.step.value),o=Number(t.currentTarget.amount.value);if(n<0||r<0||o<=0)return alert("error"),void t.currentTarget.reset();for(var a=1;a<=o;a+=1)e(a,n).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),n+=r}))}();
//# sourceMappingURL=03-promises.a4fafb93.js.map