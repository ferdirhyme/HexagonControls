$(document).ready(() => {


    //Portfolio
    
    $('.portfolio-item').on('click', (event) => {
        console.log(event.currentTarget.children[0]);
        const k = event.currentTarget.children[0];

        document.getElementById('portheader').innerText = 'Portfolio';
        document.getElementById('more').innerText = event.currentTarget.children[2].children[0].innerText;
        document.getElementById('image').append(k)

        $('.popupOverlay, .popupContent').addClass('active');
        $(".main").hide();
       
    });

   

    //Services

    $('.servives').on('click', (event) => {
        // console.log(event.currentTarget.children[0].children[0].children[2]);
        console.log(event.currentTarget.innerText);
        // const k = event.currentTarget.children[0];

        document.getElementById('portheader-services').innerText = event.currentTarget.innerText;
        document.getElementById('more-services').innerText = 'Details goes here!';
        $(".main").hide();
        // document.getElementById('image').append(k)

        $('.popupOverlay-services, .popupContent-services').addClass('active');

    })

    $('.checkOut').on('click', () => {
        $('.popupOverlay, .popupContent').removeClass('active');
        window.location.reload();
    });


});