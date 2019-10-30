export default {
    header: `<header>
    <!--if can't use video then insert img src for logo/then style--> 
    <img src="https://polisheddesignz.files.wordpress.com/2019/10/fadedfingers.jpg?resize=1200%2C700">
</header>`,
    nav: `<nav>
    <!--<img src="https://polisheddesignz.files.wordpress.com/2019/10/gold-floors1.png?resize=214%2C214">--> 
        <div class="controls">
            <a href="/Remodels.html" class="myButton">Remodels</a>
        </div>
        
        <div class="controls">
            <a href="/Floors.html" class="myButton">Home</a>
        </div>
                
    <!--<img src="https://polisheddesignz.files.wordpress.com/2019/10/cut-logo.png?resize=214%2C214">--> 
        <div class="controls">
            <a href="/Misc.html" class="myButton">Miscellaneous</a>
        </div>
    </nav>`,
    main: `<main>
<figure>
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/roomrepair.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/tilefloor.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/ceiling-repair-2.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/20190712_091101.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/dscn3046.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/marble-floor.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/20161205_110528.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/patio.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/wall3.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/20180808_1243211.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/20190731_120600_hdr.jpg?resize=200%2C200">
        <img src="https://polisheddesignz.files.wordpress.com/2019/10/woodfloor.jpg?resize=200%2C200">
    </figure>
            
        <!-- all of this will go inside of the FLOORS PAGE -->
        <!-- When FLOORS PAGE is made you will then add forms back so user can enter their info -->
        <form action="#">
                <label for="num1">Select Floor Type</label>
                <select>type="number" id="num1">
                        <select>
                                <option value="./Vinyl">Vinyl</option>
                                <option value="./Tile">Tile</option>
                                <option value="./Wood">Wood</option>
                              </select>
              
                
                 <label for="num2">Enter Square footage</label>
                <input type="number" id="num2">

             <input type="submit"value = "Calculate!">
             <p>Click on the type of flooring you're looking for and get an estimated cost!</p>
             </form>     
       <!-- create an option inside select-->
      
      
   <!-- <ul>
        <li><a href="./Vinyl">Vinyl</a></li>
        <p>$3.00 per Sq.ft</p>
        <input type="submit" value="Calculate!">
          
        <li><a href="./Tile/">Tile</a></li>
        <p>$6.00 per Sq.ft</p>
        <input type="submit" value="Calculate!">

        <li><a href="./Wood/">Wood</a></li>
        <p>$7.00 per Sq.ft</p>
        <input type="submit" value="Calculate!">
                  
        <p>Above prices are for estimated labor costs.</p>
        </ul>-->
</main> `
};