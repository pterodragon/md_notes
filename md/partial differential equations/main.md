### Math review

see `math_review.md`

#### 1.4 Initial and boundary conditions
(D) $u$ is specified "Dirichlet condition"

(N) the normal derivative $\frac{\partial u}{\partial n}$ is specified "Neumann condition"

\(R\) $\frac{\partial u}{\partial n} + au$ is specified "Robin condition"

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
$$\text{KE} = \frac{1}{2}\rho \int_{-\infty}^{\infty} u_t^2 \mathrm{d} x $$
$$\text{PE} = \frac{1}{2}T \int_{-\infty}^{\infty} u_x^2 \mathrm{d} x $$
$$ E = \frac{1}{2}\int_{-\infty}^{\infty} (\rho u_t^2 + T u_x^2) \mathrm{d} x $$
PE can be obtained by $\frac{\mathrm{d}KE}{\mathrm{d}t} = -\frac{\mathrm{d}\mathrm{PE}}{\mathrm{d}t} = 0$, differentiating KE

#### 2.3 Diffusion equation
$$ u_{t} = k u_{xx} $$
Weak maximum principle: max value of $u$ occurs at $t = 0$ or $x = 0$ or $x = l$
##### Uniqueness
The Dirichlet problem for the diffusion equation, i.e.
$$
u_t - ku_{xx} = f(x, t), \quad x \in (0, l), t>0 \newline
u(x, 0) = \phi(x) \newline
u(0, t) = g(t), \quad u(l, t) = h(t)
$$
has unique solution, i.e. the solution is completely determined by initial and boundary condition
##### Stability
Let $u_1$ and $u_2$ be solutions of the Dirichlet problem for $\phi=\phi_1$ and $\phi=\phi_2$ resp., $u_1(x, 0) = \phi_1(x), u_2(x, 0) = \phi_2(x)$
and for $h = g = f = 0$,

stability in the square integral sense:
$$\int_0^l[u_1 - u_2]^2 \mathrm{d}x \le \int_0^l [\phi_1 - \phi_2]^2 \mathrm{d}x$$
proven by energy method

stability in the uniform sense:
$$\max_x{|u_1-u_2|} \le \max_x{|\phi_1-\phi_2|}$$
proven by maximum principle

##### Diffusion on the whole line
$$
u_t = ku_{xx}, \quad x\in \real, t>0 \quad (2.4.1) \newline
u(x,0) = \phi(x)
$$

Invariance properties:

If $u(x, t)$ is a solution, the following are also solutions (verify by plugging into $(2.4.1)$)

1. $u(x - y, t)$ (translation by fixed $y$)
2. Any derivative $u_x, u_t, u_{xx}$ etc. 
3. Linear combinations of solutions
4. Integral of solutions: $S(x,t)$ is a solution $\Rightarrow \int_{-\infty}^{\infty}S(x-y, t)g(y)\mathrm{d}y$ is also a solution if the integral converges. This is limiting form of 3.
5. *dilated function* $u(\sqrt{a}x,at)$ for $a > 0$

The solution is
$$ u(x, t) = \frac{1}{\sqrt{4\pi kt}}\int_{-\infty}^{\infty} e^{-(x - y)^2/4kt} \phi(y) \mathrm{d}y \quad (2.4.8)$$
Source function:
$$ S(x, t) = \frac{\partial Q}{\partial x}=\frac{1}{\sqrt{4\pi kt}}e^{-x^2/4kt}, \quad t>0 $$
$$ Q(x, t) = \frac{1}{2}+\frac{1}{\sqrt{\pi}}\int_0^{x/\sqrt{4kt}}e^{-p^2}\mathrm{d}p $$
Note:
$$ u(x, t) = \int_{-\infty}^{\infty}S(x-y,t)\phi(y)\mathrm{d}y, \quad t>0 $$
$$ \mathrm{Erf}(x) = \frac{2}{\sqrt{\pi}}\int_0^x e^{-p^2}\mathrm{d}p$$
$$ Q(x, t) = \frac{1}{2} + \frac{1}{2}\mathrm{Erf}\bigg(\frac{x}{\sqrt{4kt}}\bigg) $$

##### Comparison of waves and diffusions

| Property                  | Waves                         | Diffusion     |
| :---                      | :---                          | :---          |
| Speed of propagation      | Finite $(\le c)$              | Infinite      |
| Singularities for $t>0$   | Transported along characteristics (speed = $c$)              | Lost immediately |
| Well-pose for $t>0$?      | Yes                           | Yes (at least for boundary solutions) |
| Well-pose for $t<0$?      | Yes                           | No    |
| Maximum principle         | Yes                           | No    |
| Behavior as $t\rightarrow \infty$ | Energy is constant so does not decay  | Decays to $0$ if $\phi$ integrable    |
| Information               | Transported                   | Lost gradually    |

#### 3.1 Diffusion on the half-line
Dirichlet problem:
$$
v_t - kv_{xx} = 0, \quad x>0, t> 0 \newline
v(x, 0) = \phi(x) \newline
v(0, t) = 0
$$

The solution is:
$$ u(x, t) = \frac{1}{\sqrt{4\pi kt}}\int_{0}^{\infty} [e^{-(x - y)^2/4kt}- e^{-(x + y)^2/4kt} \phi(y)] \mathrm{d}y $$
by *reflection method* or *method of odd extension* of $\phi(x)$

Neumann problem:
$$
w_t - kw_{xx} = 0, \quad x>0, t> 0 \newline
w(x, 0) = \phi(x) \newline
w_x(0, t) = 0
$$
Solution is by even extension of $\phi(x)$:
$$ u(x, t) = \frac{1}{\sqrt{4\pi kt}}\int_{0}^{\infty} [e^{-(x - y)^2/4kt} + e^{-(x + y)^2/4kt} \phi(y)] \mathrm{d}y $$

#### 3.2 Reflection of waves
Dirichlet problem:
$$
\begin{aligned}
\mathrm{DE:} \quad & v_{tt} - c^2v_{xx} = 0, \quad & x>0,t\in \real \\
\mathrm{IC:} \quad & v(x,0)=\phi(x), v_t(x, 0) = \psi(x), & \quad x>0 \\
\mathrm{BC:} \quad & v(0,t) = 0, &\quad t\in \real
\end{aligned}
$$
Solution by odd extension of $\phi$ and $\psi$:
$$ v(x, t) = \frac{1}{2}[\phi(x + ct) + \phi(x - ct)] + \frac{1}{2c}\int^{x + ct}_{x - ct}\psi(s)\mathrm{d}s, \quad x>c|t| $$
$$ v(x, t) = \frac{1}{2}[\phi(ct + x) + \phi(ct - x)] + \frac{1}{2c}\int^{ct + x}_{ct - x}\psi(s)\mathrm{d}s, \quad x<c|t| $$

##### Finite Interval

$$
v_{tt} - c^2v_{xx} = 0, \quad x\in(0,l),t\in \real \newline
v(x,0)=\phi(x), v_t(x, 0) = \psi(x), \quad x\in(0,l) \newline
v(0,t) = v(l, t) = 0, \quad t\in \real
$$
Solution is by odd extension of $\phi$ and $\psi$, and counting the number of reflection occurred at $(x,t)$.
Different regions (diamonds/triangles) in the $x$-$t$ plane has a different expression of solution
