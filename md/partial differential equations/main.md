### Math review

see `math_review.md`

#### 1.6 Types of second order PDE
$$ a_{11}u_{xx}+2a_{12}u_{xy}+a_{22}u_{yy}+a_1u_x+a_2u_y+a_0 = 0 $$
Theorem 1: By linear transformation of the independent variables, the equation can be reduced to:

1. Elliptic case: $a_{12}^2<a_{11}a_{22}$, it is reducible to
$$ u_{xx} + u_{yy} + \cdots = 0 $$

2. Hyperbolic case: $a_{12}^2>a_{11}a_{22}$, it is reducible to
$$ u_{xx} - u_{yy} + \cdots = 0 $$

3. Parabolic case: $a_{12}^2=a_{11}a_{22}$, it is reducible to
$$ u_{xx} + \cdots = 0 $$
where $\cdots$ denotes terms of order 1 or 0.

#### 2.1 Wave equation

$$ u_{tt} = c^2 u_{xx}, \quad x \in \real$$
general solution:
$$ u(x, t) = f(x + ct) + g(x - ct) $$
where $f, g \in C^2$ functions

##### Initial value problem

with the initial conditions
$$ u(x, 0) = \phi(x), \quad u_t(x, 0) = \psi(x) $$
There's a unique solution
$$ u(x, t) = \frac{1}{2}[\phi(x + ct) + \phi(x - ct)] + \frac{1}{2c}\int^{x + ct}_{x - ct}\psi(s)\mathrm{d}s $$
where $\phi \in C^2$

#### 2.2 Causality and energy

##### Causality
$\phi(x)$ is a pair of waves travelling in either direction at speed $c$ at half the original amplitude. $\psi(x)$ the initial velocity may cause part of the wave speed to be $\le c$ spreading out in both direction but can't be $\gt c$

The *domain of influence* of $(x_0, t)$ can only affect the solution for $t > 0$ in a triangular region in the $x\text{-}t$ plane

$\phi$ and $\psi$ vanish for $|x| > R$ $\Rightarrow$ $u(x, t) = 0$ for $|x| = R + ct$,

i.e. the domain of influence of an interval $|x| \le R$ is the sector $|x| \le R+ ct$

Inversely, fix $(x, t)$, another triangular region (upside down) is the *domain of dependence* of point $(x, t)$

##### Energy
Conservation of energy:
$$\text{KE} = \frac{1}{2}\rho \int_\real u_t^2 \mathrm{d} x $$
$$\text{PE} = \frac{1}{2}T \int_\real u_x^2 \mathrm{d} x $$
$$ E = \frac{1}{2}\int_\real (\rho u_t^2 + T u_x^2) \mathrm{d} x $$
PE can be obtained by $\frac{\mathrm{d}KE}{\mathrm{d}t} = -\frac{\mathrm{d}\mathrm{PE}}{\mathrm{d}t} = 0$, differentiating KE

#### 2.3 Diffusion equation
$$ u_{t} = k u_{xx} $$
