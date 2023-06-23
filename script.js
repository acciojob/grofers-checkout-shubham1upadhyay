const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let price = [];

  let a = document.querySelectorAll(".price");
  // price.push(a[1].innerText);

  for(let i=0; i<a.length; i++){
    price.push(a[i].innerText);
  }
  let ans = 0;
  for(let i=0; i<a.length; i++)
  {
    ans += parseInt(price[i]);
  }
  console.log(ans)

 let lr = document.createElement("tr");

  let lc = `
    <td class="total">Total</td>
    <td class="total">${ans}</td>
   `;
   lr.innerHTML = lc;
   let t = document.getElementById("myTable");
   t.append(lr)

   getSumBtn.classList.add("hide")
};

getSumBtn.addEventListener("click", getSum);