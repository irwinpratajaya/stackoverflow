$(document).ready(function() {
  getData()
});

function getData() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/question',
    success: function(data){
      data.forEach(function(data){
      $('#stackoverflow').append(`
        <tbody class="question-${data.slug}">
          <tr>
            <td><a onclick="questionDetail('${data.slug}')">${data.title}</a></td>
            <td>${data.votes}</td>
            </td>
            <td><a href="#" class="btn btn-info">+</a>
               <a href="#" class="btn btn-danger">-</a> </td>
          </tr>
        </tbody>
      `)
      })
    }
  })
}

function createQuestion() {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/question',
    data: {
      title: $('input[name="title"]').val(),
      content: $('textarea[name="content"]').val()
    },
    success: function(data){
      $('#title').val("")
      $('#content').val("")
      $('#stackoverflow').append(`
        <tbody class="question-${data.slug}">
          <tr>
            <td><a onclick="questionDetail('${data.slug}')">${data.title}</a></td>
            <td>${data.votes}</td>
            </td>
            <td><a href="#" class="btn btn-info">+</a>
               <a href="#" class="btn btn-danger">-</a> </td>
          </tr>
        </tbody>
      `)
    }
  })
}


function questionDetail(slug) {
  window.location = "question.html?title="+slug
  // console.log(slug);
}
