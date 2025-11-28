
$(document).ready(function() {

    //POHYBLIVÝ BLUR ZA MYŠÍ
    $(document).mousemove(function(e) {
        $(".cursor-blur").css({
            left: e.pageX,
            top: e.pageY
        });

        // Každý kříž reaguje jemně na pohyb myši
        $(".cross").each(function(index) {
            let speed = (index + 2) * 0.02;
            $(this).css({
                transform: `translate(${e.pageX * speed}px, ${e.pageY * speed}px)`
            });
        });
    });

    // GENEROVÁNÍ KŘÍŽKŮ
    const crossCount = 20;
    const container = $("#cross-container");

    for (let i = 0; i < crossCount; i++) {
        const cross = $("<div class='cross'>✖</div>");

        // random pozice
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        // random delay a velikost
        const delay = Math.random() * 5;
        const size = 30 + Math.random() * 40;

        cross.css({
            left: x + "px",
            top: y + "px",
            "animation-delay": delay + "s",
            "font-size": size + "px",
            opacity: 0.1 + Math.random() * 0.25
        });

        container.append(cross);
    }


    //PARTICLE DOTS 

    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [];

    for (let i = 0; i < 120; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 1,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4
        });
    }

    function animateDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dots.forEach(dot => {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.12)";
            ctx.fill();

            dot.x += dot.dx;
            dot.y += dot.dy;

            if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
            if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
        });

        requestAnimationFrame(animateDots);
    }

    animateDots();
    document.querySelector('.toggle-theme').addEventListener('click', () => {
      const html = document.documentElement;
      const isLight = html.getAttribute('data-theme') === 'light';
      html.setAttribute('data-theme', isLight ? 'dark' : 'light');
    });

});
