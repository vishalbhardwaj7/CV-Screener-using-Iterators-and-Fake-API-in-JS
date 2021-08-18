console.log("My file");
console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },

  {
    name: "Shubham Sharma",
    age: 28,
    city: "Bangalore",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },

  {
    name: "Camella Cabello",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },

  {
    name: "Aishwariya Rai",
    age: 45,
    city: "Mumbai",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
  },

  {
    name: "Rohit Sharma",
    age: 34,
    city: "Jharkhand",
    language: "Go",
    framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];
//cv iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
let candidates = cvIterator(data); //get Context Object
//button listener for next button
const next = document.getElementById("next");
nextCV();
next.addEventListener("click", nextCV);
function nextCV() {
  const currCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currCandidate == undefined) {
    alert("End of the list");
    window.location.reload();
    return;
  }
  image.innerHTML = `<img src="${currCandidate.image}" >`;
  profile.innerHTML = `
  <ul class="list-group">
  <li class="list-group-item">Name : ${currCandidate.name}</li>
  <li class="list-group-item">Age : ${currCandidate.age}</li>
  <li class="list-group-item">City : ${currCandidate.city}</li>
  <li class="list-group-item">Language : ${currCandidate.language}</li>
  <li class="list-group-item">Framework : ${currCandidate.framework}</li>
</ul>
 `;
}
