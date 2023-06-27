// your code here
 document.getElementById("urlForm").addEventListener("submit", function(event) {
      event.preventDefault();

      // Get input values
      var name = document.getElementById("name").value;
      var year = document.getElementById("year").value;

      // Generate query string
      var queryString = "name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);

      // Update URL text
      document.getElementById("url").textContent = "https://localhost:8080/?" + queryString;
    });