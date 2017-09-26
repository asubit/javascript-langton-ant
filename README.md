# Langton's ant with JavaScipt

## Description

I have created a small JavaScript script that reproduces the rules of the Langton ant.<br />
Just to check out for myself the reason for the "highway" pattern. And it happens well from about 11000 movements.<br /> 
**Still as mysterious and astonishing! ...**

Based on [this video](https://youtu.be/qZRYGxF6D3w) of "[ScienceEtonnante](https://www.youtube.com/channel/UCaNlbnghtwlsGF-KzAFThqA)" YouTube channel.

## Rules

Squares on a plane are colored variously either black or white.We arbitrarily identify one square as the "ant". The ant can travel in any of the four cardinal directions at each step it takes. The "ant" moves according to the rules below:

At a white square, turn 90° right, flip the color of the square, move forward one unit
At a black square, turn 90° left, flip the color of the square, move forward one unit
Langton's ant can also be described as a cellular automaton, where the grid is colored black or white and the “ant” square has one of eight different colors assigned to encode the combination of black/white state and the current direction of motion of the ant.

## Screenshot

![alt tag](https://raw.githubusercontent.com/asubit/javascript-langton-ant/master/langton-ant-screenshot.JPG)

*This is an example with 472 movements*

Here the link to the [online demo](http://webcreateur.net/langton-ant/index.html).

## Input parameters
- Ant's movements (iteration number)
- Speed per iteration (millisecond)
- Grid size X (boxes number)
- Grid size Y (boxes number)
