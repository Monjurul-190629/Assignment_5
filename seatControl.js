function seatHandle(event){
    /// change background color per click
    var a = document.getElementById(event);
    a.classList.remove('bg-slate-300');
    a.classList.add('bg-green-600');
    a.classList.add('pointer-events-none')
    

    /// number of seat
    var num_of_seat = document.getElementById('number_of_seat');
    console.log(num_of_seat.innerText);

    var count = parseInt(num_of_seat.innerText);
    count += 1;

    document.getElementById('number_of_seat').innerText = count;


    //// remaining_seat
    var re = document.getElementById('remaining_seat');
    var c = parseInt(re.innerText);
    c -= 1;
    document.getElementById('remaining_seat').innerText = c;


    //// CreateElement

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

}

