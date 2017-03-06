# Logistic Regression

## Intuition same spirit as Linear regression. 

For example: 3awesome + 2good +  -5 Terrible = Score

if(score  >   0) then Good Review
if(score  <=   0) then Bad Review

Let's take it one step further by making it a probability. And we use the Sigmoid function for that.

- Score(xi)	=	w * h(xi)
- Sigmoid(Score) = 1 / 1 + e^(-Score)
- P(y=+1|xi,w) = sigmoid(Score(xi))

Advantage is that This gives a measure of certainty. 

## Training

The model is trained by maximizing Maximun Likelihood Estimattion.

Maximize the Function Multiplication(  P ( yi | xi, w) )
