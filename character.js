//the game character
function drawLeftFalling ()
{
    noStroke ();
    fill (220, 122, 49);
    triangle (gameCharX - 5, gameCharY - 2,
              gameCharX - 5, gameCharY - 8,
              gameCharX - 20, gameCharY - 8);

    triangle (gameCharX - 14, gameCharY - 25,
              gameCharX - 14, gameCharY - 35,
              gameCharX - 24, gameCharY - 25);

    fill (250, 240, 190);
    ellipse (gameCharX - 13, gameCharY - 30, 15);
    rect (gameCharX - 13, gameCharY - 30, 7, 15);
    ellipse (gameCharX, gameCharY - 10, 30, 20);
    triangle (gameCharX + 9, gameCharY - 2,
              gameCharX + 20, gameCharY - 3,
              gameCharX + 10, gameCharY - 15);

    fill (250, 220, 170);
    ellipse (gameCharX, gameCharY - 10, 20, 10);

    fill (0);
    ellipse (gameCharX - 16, gameCharY - 28, 2);

}

function drawRightFalling ()
{
    noStroke ();
    fill (220, 122, 49);
    triangle (gameCharX + 5, gameCharY - 2,
              gameCharX + 5, gameCharY - 8,
              gameCharX + 20, gameCharY - 8);

    triangle (gameCharX + 14, gameCharY - 25,
              gameCharX + 14, gameCharY - 35,
              gameCharX + 24, gameCharY - 25);

    fill (250, 240, 190);
    ellipse (gameCharX + 13, gameCharY - 30, 15);
    rect (gameCharX + 6, gameCharY - 30, 7, 15);
    ellipse (gameCharX, gameCharY - 10, 30, 20);
    triangle (gameCharX - 9, gameCharY - 2,
              gameCharX - 20, gameCharY - 3,
              gameCharX - 10, gameCharY - 15);

    fill (250, 220, 170);
    ellipse (gameCharX, gameCharY - 10, 20, 10);

    fill (0);
    ellipse (gameCharX + 16, gameCharY - 28, 2);

}

function drawLeft ()
{
    noStroke ();
    fill (220, 122, 49);
    rect (gameCharX - 3, gameCharY - 5, 2, 8);
    triangle (gameCharX - 14, gameCharY - 25,
              gameCharX - 14, gameCharY - 35,
              gameCharX - 24, gameCharY - 25);

    fill (250, 240, 190);
    ellipse (gameCharX - 13, gameCharY - 30, 15);
    rect (gameCharX - 13, gameCharY - 30, 7, 15);
    ellipse (gameCharX, gameCharY - 10, 30, 20);
    triangle (gameCharX + 9, gameCharY - 2,
              gameCharX + 20, gameCharY - 3,
              gameCharX + 10, gameCharY - 15);

    fill (250, 220, 170);
    ellipse (gameCharX, gameCharY - 10, 20, 10);

    fill (0);
    ellipse (gameCharX - 16, gameCharY - 28, 2);

}

function drawRight ()
{
    noStroke ();
    fill (220, 122, 49);
    rect (gameCharX + 3, gameCharY - 5, 2, 8);
    triangle (gameCharX + 14, gameCharY - 25,
              gameCharX + 14, gameCharY - 35,
              gameCharX + 24, gameCharY - 25);

    fill (250, 240, 190);
    ellipse (gameCharX + 13, gameCharY - 30, 15);
    rect (gameCharX + 6, gameCharY - 30, 7, 15);
    ellipse (gameCharX, gameCharY - 10, 30, 20);
    triangle (gameCharX - 9, gameCharY - 2,
              gameCharX - 20, gameCharY - 3,
              gameCharX - 10, gameCharY - 15);

    fill (250, 220, 170);
    ellipse (gameCharX, gameCharY - 10, 20, 10);

    fill (0);
    ellipse (gameCharX + 16, gameCharY - 28, 2);

}

function drawFalling_Plummeting ()
{
    noStroke ();
    //wings
    fill (250, 220, 170);
    triangle (gameCharX - 6, gameCharY - 19, 
             gameCharX - 22, gameCharY - 19,
             gameCharX - 6, gameCharY - 10,);
    triangle (gameCharX + 6, gameCharY - 19, 
             gameCharX + 22, gameCharY - 19,
             gameCharX + 6, gameCharY - 10,);

    //body
    fill (250, 240, 190);
    ellipse (gameCharX, gameCharY - 30, 15);
    ellipse (gameCharX, gameCharY - 20, 7, 25);
    ellipse (gameCharX, gameCharY - 10, 30, 20);

    //feet
    fill (220, 122, 49);
    triangle (gameCharX - 10, gameCharY - 10, 
             gameCharX - 6, gameCharY - 5,
             gameCharX - 2, gameCharY - 10,);

    triangle (gameCharX + 10, gameCharY - 10, 
             gameCharX + 6, gameCharY - 5,
             gameCharX + 2, gameCharY - 10,);

    //beak
    fill (220, 122, 49);
    ellipse (gameCharX, gameCharY - 25, 5, 3);

    //eyes
    fill (0);
    ellipse (gameCharX - 4, gameCharY - 28, 2);
    ellipse (gameCharX + 4, gameCharY - 28, 2);

}

function drawStanding ()
{
    noStroke ();
    //legs
    fill (220, 122, 49);
    rect (gameCharX - 6, gameCharY - 5, 2, 8);
    rect (gameCharX + 4, gameCharY - 5, 2, 8);

    //body
    fill (250, 240, 190);
    ellipse (gameCharX, gameCharY - 30, 15);
    ellipse (gameCharX, gameCharY - 20, 7, 25);
    ellipse (gameCharX, gameCharY - 10, 30, 20);

    //beak
    fill (220, 122, 49);
    ellipse (gameCharX, gameCharY - 25, 5, 3);

    //eyes
    fill (0);
    ellipse (gameCharX - 4, gameCharY - 28, 2);
    ellipse (gameCharX + 4, gameCharY - 28, 2);

}
