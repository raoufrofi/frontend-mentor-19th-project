let labels = document.getElementsByTagName("label");
let radios = document.getElementsByTagName("input");

let main = document.getElementsByTagName("main");

function changePage() {
  var k = 0;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      k = i + 1;
      break;
    }
  }

  s = "";

  for (let i = 0; i < k; i++) {
    s += `<img src="images/icon-star.svg" alt="" class="w-[30px]" />`
  }

  console.log(s);

  main[0].innerHTML =
    `
          <article class="text-center space-y-4">
        <img src="images/illustration-thank-you.svg" alt="" class="mx-auto" />
              <p class="flex justify-center mx-auto gap-4">${s}</p>
        <p
          class="text-orange rounded-full mx-auto font-thin text-[15px] bg-light-grey bg-opacity-20 w-[70%] p-2 text-center"
        >
          You selected ${k} out of 5
        </p>
        <h1 class="text-[24px] font-bold mt-4 text-white">Thank You!</h1>
        <p class="text-medium-grey text-[15px]">
          We appreciate you taking the time to give a rating. If you ever need more
          support, don’t hesitate to get in touch!
        </p>
      </article>
    `
}