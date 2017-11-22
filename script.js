$(document).ready(()=> {

  $('#number-btn').click(()=> {
    makeChart();
  });

  $('#sort-btn').click(()=> {
    bubbleSort();
  });
// end doc ready
});


function makeChart() {
  let num = $('#number-input').val();

  // reset DOM and CSS for new data set
  $('.item').remove();
  $('.error').css('display', 'none');
  $('#sort-btn').css('display', 'none');

  if (num > 0) {
    for (let i = 0; i < num; i++) {
      // divs to append
      $('.item-container').append(
        `<div class='item item-${i}'></div>`
      );
      // random number between 10 and 200
      let randomHeight = Math.random()*200 + 10;
      $(`.item-${i}`).css('height', randomHeight);
    }
    $('#sort-btn').css('display', 'inline-block');
  }
  else {
    $('.error').css('display', 'block');
    console.log('number please');
  }
}

function bubbleSort() {
  // get all created items
  let itemArr = $('.item');
  itemArr = Array.from(itemArr);
  console.log(itemArr);

  itemArr.forEach((item)=> {
    console.log(item);
  });

  console.log(itemArr[0].style);

  for (let i = 0; i < itemArr.length; i++) {
    for (let j = 1; j < itemArr.length; j++) {
      // get heights for a set of two divs
      let height1 = $(`.item-${j-1}`).height();
      let height2 = $(`.item-${j}`).height();

      // console.log(`height for div ${j-1}: `+height1+'\n'+
      //             `height for div ${j}: `+height2);

      // if statement to switch order or stay the same
      if (height1 > height2) {
        let largerHeight = height1;
        // switch heights
        $(`.item-${j}`).css('height', largerHeight);
        $(`.item-${j-1}`).css('height', height2);
      }
      // end innermost for loop
    }
    // end outer for loop
  }
}
