import React from "react";
import { render } from "@testing-library/react";
import DiyList from "./DiyList.jsx";

describe("DiyList tests", () => {
    const crafts = [
      {"id": "0",
      "name" : "DIY Splatter Painted Easter Eggs",
      "category" : "easter",
      "description" : "Pick a color that'll match your décor, then create these chic splatter Easter eggs. Display them as a center piece or anywhere around the house.",
      "tutorial" : "<p>1. Make cake: Heat oven to 325°F. Butter 9- by 13-inch cake pan and line bottom with parchment, leaving overhang on 2 sides.</p><br/><p>2. In bowl, whisk together flour, baking powder, and salt.</p><br/><p>3. Using electric mixer, beat butter and granulated sugar on low speed to combine. Increase speed to medium-high; beat until light and fluffy, about 3 minutes. Reduce speed to medium; add eggs 1 at a time, beating until each is incorporated before adding next egg. Beat in vanilla.</p><br/><p>4. Reduce speed to low and add flour mixture in three parts, alternating with milk and beating just until incorporated.</p><br/><p>5. Spread batter in prepared pan and bake until wooden pick inserted in center comes out clean, about 40 minutes. Let cool in pan 10 minutes, then use overhangs to remove from pan and let cool completely.</p><br/><p>6. Make frosting: Using electric mixer, beat confectioners’ sugar, butter, and salt on low speed until combined, then increase speed to medium and beat until fluffy, about 3 minutes. With mixer running, slowly add cream. Beat until fluffy, about 3 minutes. Beat in vanilla.</p><br/><p>7. To decorate cake, cut out egg template and seven ¼-inch-wide strips of paper. Transfer cake to serving platter. Spread cake generously with buttercream. Place egg template in center of cake and score around outside; remove template.</p><br/><p>8. Use small offset spatula to smooth frosting inside scored egg shape. Place strips of paper on cake to create shapes inside egg. Working quickly with 1 section at a time, while icing is still wet, carefully fill each space with sprinkles, nonpareils, and sanding sugar. Place small pieces of plastic wrap over sections not being filled to keep colors from blending. Carefully peel away paper lines. (If frosting starts to crust over, brush lightly with water.)</p><br/>",
      "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/splatter-painted-easter-egg-designs-1616169765.jpg?crop=0.9514285714285714xw:1xh;center,top&resize=980:*",
      "timeStamp": "2018-11-22T17:55:57.000Z",
      "displayDate": "November 22nd 2018, 9:55 am"
      }
   ];

    it("renders correctly", () => {
      const { container } = render(<DiyList crafts={crafts}/>);
      expect(container).toMatchSnapshot();
    });
  });