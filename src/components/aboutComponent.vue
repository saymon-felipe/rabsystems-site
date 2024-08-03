<template>
    <div class="about-component" id="about-component">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
                    <div class="text-container text-center text-lg-end">
                        <h2>Descubra o que nos move</h2>
                        <p>
                            Na <strong>Rabsystems</strong>, transformamos sonhos em realidade com as ferramentas e o suporte certos. Criamos sites e soluções personalizadas para que você possa alcançar seus objetivos e impactar o mundo. 
                            Seja para pequenos negócios ou grandes empresas, oferecemos as soluções que você precisa para ter sucesso. Junte-se a nós e realize seus sonhos enquanto faz a diferença.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
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
.company-logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    margin: auto;
}

.text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
}

    .text-container h2 {
        margin-bottom: 1rem;
        width: 100%;
    }

@media (max-width: 768px) {
    .company-logo-container img {
        width: calc(7rem + 5vw);
        margin-top: 2rem;
    }

    .text-container {
        margin: 0;
    }
}
</style>