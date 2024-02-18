function seatHandle(event){

    /// number of seat
    var num_of_seat = document.getElementById('number_of_seat');
    console.log(num_of_seat.innerText);

    var count = parseInt(num_of_seat.innerText);
    count += 1;
    var co;
    if(count > 4){
       co = 4;
    }
    else{
        co = count;
    }
    document.getElementById('number_of_seat').innerText = co;

    
    /// change background color per click
    var a = document.getElementById(event);
    if(count <= 4){
        a.classList.remove('bg-slate-300');
        a.classList.add('bg-green-600');
        a.classList.add('pointer-events-none');
    }
    else{
        a.classList.add('pointer-events-none');
        console.log("no more seat");
    }

    

    //// remaining_seat
    var re = document.getElementById('remaining_seat');
    var c = parseInt(re.innerText);
    c -= 1;
    if(c < 36){
        c = 36;
    }
    document.getElementById('remaining_seat').innerText = c;


    //// CreateElement
    if(count < 5){
        var cr1 = document.createElement('p');
        cr1.innerText = a.innerText;
        var cr2 = document.createElement('p');
        cr2.innerText = "Economy";
        var cr3 = document.createElement('p');
        cr3.innerText = 550;
        var dr = document.createElement('div');
        dr.appendChild(cr1);
        dr.appendChild(cr2);
        dr.appendChild(cr3);
        dr.classList.add("flex", "justify-between", "py-2", "text-xl", "font-semibold", "text-gray-500");

        var main_div = document.getElementById("add_div");
        main_div.appendChild(dr);

        var am = document.getElementById("total_amount");
        var tk = am.innerText;
        tk = parseInt(tk);
        tk += 550;
        document.getElementById("total_amount").innerText = tk;
        document.getElementById("grand_amount").innerText = tk;
    }
    
    ///// check cupon
    var b1 = document.getElementById('number_of_seat');
    var b2 = parseInt(b1.innerText);
    if(b2 == 4){
        var cupon_t = document.getElementById("cupon_text");
        var cupon_i = document.getElementById("cupon_id");
        cupon_t.removeAttribute('disabled');
        cupon_i.removeAttribute('disabled');
    }
    

    /// check Next Button
    var n1 = document.getElementById("num");
    if(n1.value.length > 5 || b2 > 0){
        var n_button = document.getElementById("next_button");
        n_button.removeAttribute("disabled");
    }

}


function after_discount(){
    var gg = document.getElementById("grand_amount");
    var tt = document.getElementById("cupon_text");
    var dd = document.getElementById("Cupon_div");
    console.log(tt.value);
    if(tt.value == "NEW15"){
        var total_amount = document.getElementById("total_amount");
        total_amount = parseInt(total_amount.innerText);
        var dis = total_amount * 15/100;
        gg.innerText = total_amount - dis; 
        dd.classList.add("hidden");
    }
    else if(tt.value == "Couple 20"){
        var total_amount = document.getElementById("total_amount");
        total_amount = parseInt(total_amount.innerText);
        var dis = total_amount * 20/100;
        gg.innerText = total_amount - dis;
        dd.classList.add('hidden');
    }
    else{
        alert("Wrong Cupon !!!");
    }
}

