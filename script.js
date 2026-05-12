<script>
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const alturaPagina = document.documentElement.scrollHeight - window.innerHeight;
        const progresso = (scrollTop / alturaPagina) * 100
        document.querySelector(".barra-rolagem").style.width = progresso + "%";
    });
</script>