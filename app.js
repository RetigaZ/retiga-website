var visitCount = localStorage.getItem("page_view");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
console.log(`Website was visted ${visitCount} times`);
