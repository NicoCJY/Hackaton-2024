//enemy
function Enemy (x, y, range)
{
    this.x = x;
    this.y = y;
    this.range = range;
    
    this.currentX = x;
    this.inc = 0.75;
    
    this.update = function ()
                    {
                        this.currentX += this.inc;
                        if (this.currentX > this.x + this.range * 1.5)
                        {
                            this.inc = -0.75;
                        }
                        else if (this.currentX < this.x)
                        {
                            this.inc = 0.75;
                        }
                    }
    
    this.draw = function ()
                {
                    this.update ();
                    //lights
                    fill (255, 255, 25);
                    ellipse (this.currentX + 40, this.y - 10, 15, 10);
                    //exhaust
                    fill (125);
                    triangle (this.currentX - 20, this.y - 12.5,
                              this.currentX - 45, this.y - 17.5,
                              this.currentX - 45, this.y - 7.5);
                    //car body
                    fill (180, 35, 35);
                    rect (this.currentX - 40, this.y - 30, 80, 30);
                    rect (this.currentX - 25, this.y - 60, 50, 30);
                    //head of the car
                    ellipse (this.currentX, this.y - 60, 50, 10);
                    //wheels
                    fill (0);
                    ellipse (this.currentX - 25, this.y, 20);
                    ellipse (this.currentX + 25, this.y, 20);
                    //window
                    fill (175, 240, 240);
                    rect (this.currentX - 20, this.y - 55, 15, 20);
                    rect (this.currentX, this.y - 55, 20, 20);
                    //door & handle
                    push ();
                    stroke (160, 15, 15);
                    strokeWeight (2);
                    noFill ();
                    rect (this.currentX - 20, this.y - 55, 15, 45);
                    rect (this.currentX, this.y - 55, 20, 45);
                    rect (this.currentX - 12.5, this.y - 30, 5, 2.5);
                    rect (this.currentX + 12.5, this.y - 30, 5, 2.5);
                    pop ();
                }
    
    this.checkContact = function (gc_x, gc_y)
                        {
                            var d = dist (gc_x, gc_y, this.currentX, this.y);
                            if (d < 50)
                            {
                                return true;
                            }
                            return false;
                        }
}
