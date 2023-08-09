window.reviewData = [
    {
      name: "Mark Taylor",
      date: "2023-08-03",
      rating: 4,
      text: "Dixit is a masterpiece of storytelling and imagination. The cards are both whimsical and thought-provoking, and the gameplay mechanics are simple yet brilliant.",
    },
    {
      name: "Emily Miller",
      date: "2023-08-07",
      rating: 4,
      text: "Dixit is an absolute gem among party games. It's unlike anything I've played before, and the sheer creativity it fosters is mind-blowing.",
    },
    {
      name: "Andy Jones",
      date: "2023-08-02",
      rating: 5,
      text: "Dixit! A must-have for any board game collection!",
    },
    {
      name: "Sarah Smith",
      date: "2023-08-02",
      rating: 4,
      text: "Dixit is a great icebreaker and sparks delightful conversations with each card played.",
    },
    {
      name: "Tom Smith",
      date: "2023-08-06",
      rating: 5,
      text: "Dixit is an amazing game that sparks creativity and laughter in every round. Highly recommended!",
    },
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    const reviewSection = document.getElementById("reviewSection");
    const reviewData = window.reviewData;
  
    function generateReviewCards() {
      reviewSection.innerHTML = ""; 
      reviewData.forEach((review) => {
        const card = document.createElement("div");
        card.classList.add("review-card");
  
        const nameElement = document.createElement("h3");
        nameElement.textContent = review.name;

        const [year, month, day] = review.date.split("-");
  
        const dateObj = new Date(year, month - 1, day);
        const dateElement = document.createElement("p");
        dateElement.textContent = dateObj.toLocaleDateString();
      
        const ratingElement = document.createElement("p");
        ratingElement.textContent =
          "Rating: " + "★ ".repeat(review.rating) + "☆ ".repeat(5 - review.rating);
  
        const textElement = document.createElement("p");
        textElement.textContent = review.text;
  
        card.appendChild(nameElement);
        card.appendChild(dateElement);
        card.appendChild(ratingElement);
        card.appendChild(textElement);
  
        reviewSection.appendChild(card);
      });
    }
  
    generateReviewCards();
  
    const reviewForm = document.getElementById("reviewForm");
    reviewForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("nameInput").value;
      const date = document.getElementById("dateInput").value;
      const rating = document.getElementById("ratingInput").value;
      const text = document.getElementById("reviewTextInput").value;
  
      window.reviewData.push({
        name,
        date,
        rating,
        text,
      });
  
      generateReviewCards();
  
      reviewForm.reset();
    });
  
    const sortButton = document.getElementById("sortButton");
    sortButton.addEventListener("click", function () {
      sortReviews();
    });
  
    function sortReviews() {
      window.reviewData.sort((a, b) => new Date(b.date) - new Date(a.date));
      generateReviewCards();
    }
  });
  