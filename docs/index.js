"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-12-07
 * @modified
 *
 * @description
 * @description
 * @difficulty Easy
 * @complexity O(n)
 * @time O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

const html = document.querySelector(`html`);
const body = document.querySelector(`body`);
const btn = document.querySelector(`#btn_switch`);

btn.addEventListener(`change`, (e) => {
  const {
    value,
    checked,
   } = e.target;
  // log(`e.target =`, e, e.target, value, checked);
  let color = void(0);
  let backgroundColor = void(0);
  if(checked) {
    color = getComputedStyle(html).getPropertyValue('--dark-color');
    backgroundColor = getComputedStyle(html).getPropertyValue('--dark-background-color');
  } else {
    color = getComputedStyle(html).getPropertyValue('--white-color');
    backgroundColor = getComputedStyle(html).getPropertyValue('--white-background-color');
  }
  html.style.setProperty('--color', color);
  html.style.setProperty('--background-color', backgroundColor);
  // body.style.setProperty(`color`, color);
  // body.style.setProperty(`background-color`, backgroundColor);
});

// btn.addEventListener(`change`, (e) => {
//   const {
//     value,
//     checked,
//    } = e.target;
//   // log(`e.target =`, e, e.target, value, checked);
//   let color = void(0);
//   let backgroundColor = void(0);
//   if(checked) {
//     color = getComputedStyle(html, ':root').getPropertyValue('--dark-color');
//     backgroundColor = getComputedStyle(html, ':root').getPropertyValue('--dark-background-color');
//   } else {
//     color = getComputedStyle(html, ':root').getPropertyValue('--white-color');
//     backgroundColor = getComputedStyle(html, ':root').getPropertyValue('--white-background-color');
//   }
//   // html.style.color = color;
//   // html.style.backgroundColor = backgroundColor;
//   // html.setAttribute(`style`, body.getAttribute(`style`) + `color: ${color}; background-color: ${backgroundColor};`);
//   body.style.color = color;
//   body.style.backgroundColor = backgroundColor;
//   body.setAttribute(`style`, body.getAttribute(`style`) + `color: ${color}; background-color: ${backgroundColor};`);
// });

// btn.addEventListener(`click`, (e) => {
//   log(`click =`, e.target);
// });


