<template>
    <div class="about-component" id="about-component">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-12">
                    <div class="text-container">
                        <h2>Descubra o que nos move</h2>
                        <p>
                            Na <strong>Rabsystems</strong>, acreditamos que cada sonho pode se tornar realidade com as ferramentas e o suporte certos. É por isso que nos dedicamos a criar sites e soluções personalizadas para ajudar nossos clientes a alcançar seus objetivos e fazer a diferença na humanidade. Desde pequenos negócios até grandes empresas, estamos aqui para oferecer as soluções de programação que você precisa para alcançar o sucesso. Junte-se a nós na jornada para realizar seus sonhos e fazer a diferença no mundo.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="company-logo-container animate__animated animate__pulse animate__infinite animate__slow">
                        <img src="../assets/img/rabsystems-icon.png" alt="Icone Rabsystems" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "aboutComponent"
}
</script>
<style scoped>

.about-component {
    padding: 3rem 0;
}

.company-logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;
    text-align: center;
}

    .text-container h2 {
        margin-bottom: 1rem;
        width: 100%;
    }

@media (max-width: 768px) {
    .company-logo-container img {
        width: calc(10rem + 10vw);
        margin-top: 2rem;
    }

    .text-container {
        margin: 0;
    }
}
</style>