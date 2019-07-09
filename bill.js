var total = 0;
        var subtotal;

        function split() {
            document.getElementById("display").innerHTML = "Enter total bill: <br>";
            document.getElementById("user_entry").innerHTML = '<input type="text" class="form-control col-md-2 offset-md-5 text-center animated fadeInDown" id="input"><br>' +
                        '<button id="total" type="button" class="btn btn-outline-danger btn-lg animated fadeInUp" onclick="bill()">Enter</button>';
        }

        function bill() {
            var data_entry = document.getElementById("input").value;
            total += parseFloat(data_entry);

            document.getElementById("display").innerHTML = "How many people are splitting the bill?<br>";
            document.getElementById("user_entry").innerHTML = '<input type="text" class="form-control col-md-2 offset-md-5 text-center animated fadeInDown" id="input"><br>' +
                        '<button id="num_of_people" type="button" class="btn btn-outline-danger btn-lg animated fadeInUp" onclick="individual()">Enter</button>';
        }

        function individual() {
            var data_entry = document.getElementById("input").value;
            total /= Math.round(100 * parseInt(data_entry))/100;

            document.getElementById("amount").setAttribute("class","text-center animated fadeInDown");
            document.getElementById("amount").innerHTML = "$ " + total.toFixed(2);
            ask_tip();
        }

        function ask_tip() {

            document.getElementById("display").innerHTML = "How much tip would you like to add?<br>";
            document.getElementById("user_entry").innerHTML = '<button id="tip10" type="button" class="btn btn-outline-danger btn-lg animated fadeInDown" onclick="tip(10)">10%</button><br>' +
            '<button id="tip15" type="button" class="btn btn-outline-danger btn-lg animated fadeInDown delay-1s" onclick="tip(15)">15%</button><br>' +
            '<button id="tip20" type="button" class="btn btn-outline-danger btn-lg animated fadeInDown delay-2s" onclick="tip(20)">20%</button><br>' +
            '<button id="service_charge" type="button" class="btn btn-outline-danger btn-lg animated fadeInDown delay-3s" onclick="final()">Service Charge Included</button><br>' +
            '<button id="customtip" type="button" class="btn btn-outline-danger btn-lg animated fadeInDown delay-4s" onclick="custom()">Other amount</button><br>';

        }

        function tip(amount) {
            var tip = Math.round(total * amount)/100; 

            document.getElementById("tip_amount").setAttribute("class","text-center animated fadeInDown");
            document.getElementById("tip_amount").innerHTML = "Plus tip $ " + tip.toFixed(2);
            
            document.getElementById("display").innerHTML = "If charging the card, exclude the tip.<br>Add the tip later after the initial charge.<br><br>" +
                                                           "If paying by cash, pay the total amount of <br><strong class='bg-warning animated flash delay-1s'> $ " + (total + tip).toFixed(2) + "</strong><br>";
            document.getElementById("user_entry").innerHTML = '<button id="reset" type="button" class="btn btn-outline-danger btn-lg animated fadeInUp delay-2s" onclick="reset()">Restart</button>';
        }

        function final() {

            document.getElementById("display").innerHTML = "Simply pay the amount shown.<br><br>Have a good one!";
            document.getElementById("user_entry").innerHTML = '<button id="reset" type="button" class="btn btn-outline-danger btn-lg animated fadeInUp delay-1s" onclick="reset()">Restart</button>';
        }

        function custom() {

            document.getElementById("display").innerHTML = "Pay the amount shown.<br> Please add tip even if you deemed the service less desirable.<br><br>" +
                                                           "<span style='font-size:80px;'>&#128523;</span>";
            document.getElementById("user_entry").innerHTML = '<button id="reset" type="button" class="btn btn-outline-danger btn-lg animated fadeInUp delay-1s" onclick="reset()">Restart</button>';
        }

        function reset() {
            total = 0;

            document.getElementById("amount").setAttribute("class","text-center animated fadeInDown");
            document.getElementById("amount").innerHTML = "$ " + total.toFixed(2);
            document.getElementById("tip_amount").innerHTML = "";
            document.getElementById("display").innerHTML = '<p class="animated fadeInUp">What would you like to do?</p>';
            document.getElementById("user_entry").innerHTML = '<button id="split" type="button" class="btn btn-outline-danger btn-lg animated fadeInLeft delay-1s" onclick="split()">Split Bill Equally</button><br>' + 
            '<button id="itemize" type="button" class="btn btn-outline-danger btn-lg  animated fadeInRight delay-1s" onclick="itemize()">Itemize Bill</button>';
        }

        function itemize() {
            document.getElementById("display").innerHTML = "Enter price of ordered item: <br>";
            document.getElementById("user_entry").innerHTML = '<input type="text" class="form-control col-md-2 offset-md-5 text-center animated fadeInDown" id="input">' +
                        '<button id="price" type="button" class="btn btn-outline-danger btn-lg animated fadeInRight" onclick="add()">Add Item</button><br><br>' +
                        '<button id="shared" type="button" class="btn btn-outline-danger btn-lg animated fadeInLeft" onclick="shared()">Had A Shared Item?</button><br>' + 
                        '<button id="done" type="button" class="btn btn-outline-danger btn-lg animated fadeInUp" onclick="tax()">Done</button>';

        }

        function add() {
            var data_entry = document.getElementById("input").value;
            document.getElementById("input").value = "";
            total += parseFloat(data_entry);
            document.getElementById("amount").setAttribute("class","text-center animated fadeInDown");
            document.getElementById("amount").innerHTML = "$ " + total.toFixed(2);
        }

        function shared() {
            document.getElementById("display").innerHTML = "Enter price of shared item: <br>";
            document.getElementById("user_entry").innerHTML = '<input type="text" class="form-control col-md-2 offset-md-5 text-center animated fadeInDown" id="input"><br>' +
                        '<button id="shared_number" type="button" class="btn btn-outline-danger btn-lg animated fadeInUp" onclick="shared_split()">Enter</button>';
        }

        function shared_split() {
            var data_entry = document.getElementById("input").value;
            subtotal = 0;
            subtotal += parseFloat(data_entry);

            document.getElementById("display").innerHTML = "How many people are splitting this shared item?<br>";
            document.getElementById("user_entry").innerHTML = '<input type="text" class="form-control col-md-2 offset-md-5 text-center animated fadeInDown" id="input"><br>' +
                        '<button id="num_of_people" type="button" class="btn btn-outline-danger btn-lg animated fadeInUp" onclick="add_split()">Enter</button>';
        }

        function add_split() {
            var data_entry = document.getElementById("input").value;
            subtotal /= Math.round(100 * parseInt(data_entry))/100;
            total += subtotal;

            document.getElementById("amount").setAttribute("class","text-center animated fadeInDown");
            document.getElementById("amount").innerHTML = "$ " + total.toFixed(2);
            itemize();
        }

        function tax() {
            document.getElementById("display").innerHTML = "What is the sales tax in percentage: <br>";
            document.getElementById("user_entry").innerHTML = '<input type="text" class="form-control col-md-2 offset-md-5 text-center animated fadeInDown" id="input"><br>' +
                        '<button id="tax" type="button" class="btn btn-outline-danger btn-lg animated fadeInUp" onclick="calculate()">Enter</button>';
        }

        function calculate() {
            var data_entry = document.getElementById("input").value;
            total *= (1 + (parseFloat(data_entry) / 100));
            document.getElementById("amount").setAttribute("class","text-center animated fadeInDown");
            document.getElementById("amount").innerHTML = "$ " + total.toFixed(2);
            ask_tip();
        }