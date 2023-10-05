<!DOCTYPE html>

<head>

    <title>Aula 14</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>
        h1 {
            text-align: center;

            background-color: pink;
        }

        body {
            background-color: rgb(255, 0, 115);
        }

        img {
            width: 50%;


        }

        div {
            text-align: center;
            
        }

        main {
            padding: 20px;
            max-width: 1200px;
            margin: 100px auto;
            background-color: rgb(255, 255, 255);
        }
 
    </style>
</head>

<body>
    <main>
        <div class="row">
            <div class="col-4 offset-4">
                <h1>calculadora</h1>
                <div class="row">
                    <div class="col-12">
                        <input type="text" class="form-control" id="valor"></input>
                    </div>

                    <div class="row">
                        <div class="col-3">
                            <div class="d-grid gap-2">
                                <button class="btn btn-danger" type="button"onclick="apagarTudo()">C</button>
                                <button class="btn btn-dark" type="button"onclick="motrarMemoria()">MR</button>
                                <button class="btn btn-dark" type="button"onclick="apagarMemoria()">MC</button>
                                <button class="btn btn-dark" type="button"onclick="addNumero()">M+</button>
                                <button class="btn btn-dark" type="button"onclick="menosNumero()">M-</button>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="row">
                                <div class="col-8">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button"onclick="apagar()">&lt;x</button>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button"onclick="pocentagem()">%</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button" onclick="insere_7()">7</button>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button" onclick="insere_8()">8</button>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button" onclick="insere_9()">9</button>
                                    </div>
                                </div>

                            </div>

                            <div class="row mt-2">
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button" onclick="insere_4()">4</button>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button" onclick="insere_5()">5</button>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button" onclick="insere_6()">6</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button" onclick="insere_1()">1</button>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button" onclick="insere_2()">2</button>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button" onclick="insere_3()">3</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-8">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button" onclick="insere_0()">0</button>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-dark" type="button"onClick="add_ponto">.</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="d-grid gap-2">
                                <button class="btn btn-dark" type="button"onclick="dividir()">/</button>
                                <button class="btn btn-dark" type="button"onclick="multiplicar()">x</button>
                                <button class="btn btn-dark" type="button"onclick="subtrair()">-</button>
                                <button class="btn btn-dark" type="button"onclick="efetuar_soma()">+</button>
                                <button class="btn btn-dark" type="button"onclick="resultado()">=</button>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <img src="https://media.tenor.com/xu144P488qAAAAAj/cute-calculator.gif" alt="">
                </div>



    </main>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>

    <script src="aula14.js">

    </script>
</body>

</html>
