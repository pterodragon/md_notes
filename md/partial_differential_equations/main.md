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

2. Hyperbolic case: $a_{12}^2 > a_{11}a_{22}$, it is reducible to
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
$$ \tag{2.4.1}
u_t = ku_{xx}, \quad x\in \real, t>0  \newline
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
$$ \tag{2.4.8} u(x, t) = \frac{1}{\sqrt{4\pi kt}}\int_{-\infty}^{\infty} e^{-(x - y)^2/4kt} \phi(y) \mathrm{d}y $$
Source function:
$$ S(x, t) = \frac{\partial Q}{\partial x}=\frac{1}{\sqrt{4\pi kt}}e^{-x^2/4kt}, \quad t>0 $$
$$ Q(x, t) = \frac{1}{2}+\frac{1}{\sqrt{\pi}}\int_0^{x/\sqrt{4kt}}e^{-p^2}\mathrm{d}p $$
Comparing to the pdf of normal distribution:
$$ f(x|\mu,\sigma) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\big(\frac{(x-\mu)}{\sigma}\big)^2}$$
$$ S(x,t) = f(x|\mu=0,\sigma=\sqrt{2kt})$$
$$ \delta(x) = \lim_{\sigma\rightarrow 0}f(x|\mu,\sigma) = \lim_{t\rightarrow 0}S(x, t) $$
Note:
$$ u(x, t) = \int_{-\infty}^{\infty}S(x-y,t)\phi(y)\mathrm{d}y, \quad t>0 $$
$$ \mathrm{Erf}(x) = \frac{2}{\sqrt{\pi}}\int_0^x e^{-p^2}\mathrm{d}p, \quad \lim_{x\rightarrow+\infty}\mathrm{Erf}(x) = 1$$
$$ Q(x, t) = \frac{1}{2} + \frac{1}{2}\mathrm{Erf}\bigg(\frac{x}{\sqrt{4kt}}\bigg) $$
$$ \int_{-\infty}^{\infty}S(x,t)\mathrm{d}x = 1$$
For any $h(x)$,
$$ \lim_{\epsilon\rightarrow 0}\int_{-\infty}^{\infty}S(x-y,\epsilon)h(y)\mathrm{d}y=(\delta*h)(x) = h(x)$$
Cutting out the spike of $S$ and consider the max value:
$$ \lim_{t\rightarrow 0}\max_{|x|>\delta} S(x,t) = 0 $$

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

#### 3.3 Diffusion with a source
##### Source on whole-line
$$ u_t - ku_{xx} = f(x,t), \quad x\in \real, t>0 \newline
u(x,0) = \phi(x)
$$
Solution is:
$$
u(x,t) = \int_{-\infty}^{\infty}S(x-y,t)\phi(y)\mathrm{d}y+\int_0^t\int_{-\infty}^{\infty}S(x-y,t-s)f(y,s)\mathrm{d}y\mathrm{d}s
$$
Guessing by analogy to solution of 1st order linear ODE using integrating factor (operator method)

##### Source on a half-line
$$ v_t - kv_{xx} = f(x,t), \quad x>0, t>0 \newline
v(0,t) = h(t) \newline
v(x,0) = \phi(x)
$$
To solve, let $V(x,t) = v(x,t)-h(t)$ and reduce the problem to a homogenous one and use method of reflection

For the Neumann problem:
$$ w_t - kw_{xx} = f(x,t), \quad x>0, t>0 \newline
w_x(0,t) = h(t) \newline
w(x,0) = \phi(x)
$$
To solve, let $W(x,t) = w(x,t)-xh(t)$

#### 3.4 Waves with a source
$$ \tag{3.4.1}u_{tt} - c^2u_{xx} = f(x, t) $$
$$
\tag{3.4.2}
\begin{aligned}
u(x, 0) & = \phi(x) \\
u_t(x, 0) & = \psi(x)
\end{aligned}
$$
The unique solution is:
$$ u(x, t) = 
\tag{3.4.3} \frac{1}{2}[\phi(x + ct) + \phi(x - ct)] + \newline \frac{1}{2c}\int^{x + ct}_{x - ct}\psi+\frac{1}{2c}\iint_\Delta f$$
where $\Delta$ is the characteristic triangle bounded by $y = x - ct, y = x + ct, t = 0$

#### Well-posedness
Let $u_1$ be the solution to the data $\phi_1, \psi_1, f_1$, 
$u_2$ be the solution to the data $\phi_2, \psi_2, f_2$, 
Consider $u=u_1-u_2$, and the area of $\Delta$ is $ct^2$:
$$
|u| \le \max|\phi|+\frac{1}{2c}\max |\psi|\cdot 2ct + \frac{1}{2c}\max|f|\cdot ct^2
$$
$$
\|u_1-u_2\|_T \le \|\phi_1-\phi_2\|+ T\|\psi_1-\psi_2\| + \frac{T^2}{2}\|f_1-f_2\|_T
$$
where $\|w\|_T =\max_{x\in \real, t\in[0, T]}|w(x,t)|$.

$$
\|\phi_1-\phi_2\|<\delta,
\|\psi_1-\psi_2\|<\delta,
\|f_1-f_2\|_T<\delta \newline \Rightarrow
\|u_1-u_2\|_T \le \delta(1+T+T^2)<\epsilon
$$

#### Proof of $(3.4.3)$
By method of characteristics, Green's theorem, or operator method

#### 3.5 Diffusion analysis
In 2.3,
$$ \tag{3.5.1} u(x, t) = \int_{-\infty}^{\infty}S(x-y,t)\phi(y)\mathrm{d}y, \quad t>0 $$
can be written as
$$ \tag{3.5.2} u(x, t) = \frac{1}{\sqrt{4\pi}}\int_{-\infty}^{\infty}e^{-p^2/4}\phi(x-p\sqrt{kt})\mathrm{d}p$$

##### Theorem 1:

$\phi$ bounded for $x \in\real \Rightarrow$

- $(3.5.2)$ is infinitely differentiable for $x\in \real, t>0$
- $u$ is a solution to $u_t=ku_{xx}$
- $\lim_{t\rightarrow 0} u(x,t)=\phi(x)$

Corollary:

$u(x,t)$ has all derivatives of all orders, even if $\phi$ is not differentiable

This means all solutions become smooth as soon as diffusion takes place

##### Theorem 2:
Let $\phi(x)$ be bounded and piecewise continuous, then $(3.5.1)$ is infinitely differentiable solution for $t > 0$ and 
$$ \lim_{t\rightarrow 0} u(x,t) = \frac{1}{2}[\phi(x^+)+\phi(x^-)]$$


### Chapter 4 Boundary Problems
#### 4.1 Separation of variables, Dirichlet condition

##### Homogenous wave equation
$$
\tag{4.1.1}
u_{tt} = c^2u_{xx}, \quad x \in (0, l)
$$
$$
\tag{4.1.2}
u(0, t) = 0 = u(l, t)
$$
$$
\tag{4.1.3}
u(x, 0) = \phi(x), u_t(x,0) = \psi(x)
$$

A *separated solution* is of the form
$$ 
u(x, t) = X(x)T(t)
$$

$$
-\frac{T''}{c^2T}=-\frac{X''}{X}=\lambda
$$
Solving the pairs of ODE gives
$$
u_n(x,t) = \bigg(A_n \cos{\frac{n\pi ct}{l}} + B_n \sin{\frac{n\pi ct}{l}} \bigg)\sin{\frac{n\pi x}{l}}
$$
And solution to $(4.1.1)$ and $(4.1.2)$ only is any *finite* sum:
$$
\tag{4.1.9}
u(x,t) = \sum_n{\bigg(A_n \cos{\frac{n\pi ct}{l}} + B_n \sin{\frac{n\pi ct}{l}} \bigg)\sin{\frac{n\pi x}{l}}}
$$
for $n>0$ and $A_n, B_n$ are arbitrary constants

$(4.1.9)$ solves $(4.1.3)$ as well if:
$$
\phi(x) = \sum_n{A_n \sin{\frac{n\pi x}{l}}}
$$
$$
\psi(x) = \sum_n{\frac{n\pi c}{l}B_n \sin{\frac{n\pi x}{l}}}
$$

##### Homogenous diffusion equation (Dirichlet)
$$
u_t = ku_{xx}, \quad x \in (0, l), t>0 \newline
u(0, t) = u(l, t) = 0 \newline
u(x, 0) = \phi(x)
$$
By $u=T(t)X(x)$ again, solution:
$$
\tag{4.1.17}
u(x, t) = \sum_{n=1}^{\infty}A_ne^{-(n\pi/l)^2kt}\sin\frac{n\pi x}{l}
$$
if
$$
\phi(x) = \sum_{n=1}^{\infty}A_n\sin\frac{n\pi x}{l}
$$

$\lambda_n = (n\pi / l)^2$ are called *eigenvalues* and $X_n(x) = \sin(n\pi x/l)$ are called *eigenfunctions* because
$$
-\frac{\mathrm{d}^2}{\mathrm{d}x^2}X = \lambda X, \quad X(0) = X(l) = 0
$$
and $-\frac{\mathrm{d}^2}{\mathrm{d}x^2}$ is the operator. There're infinitely many eigenvalues

$\lambda_n > 0$ for this Dirichlet problem

#### 4.2 Neumann condition
##### Homogenous diffusion equation
$$
u_t = ku_{xx}, \quad x \in (0, l), t>0 \newline
u_x(0, t) = u_x(l, t) = 0 \newline
u(x, 0) = \phi(x)
$$
$$
\lambda_n = \Big(\frac{n\pi}{l}\Big)^2, n \ge 0 \newline
$$
$\lambda_0$ has eigenfunction $X=C$ where $C$ is constant

$\lambda_n, n>0$ has eigenfunctions $X_n(x) = \cos{\frac{n\pi x}{l}}$

Solution:
$$
\tag{4.2.5}
u(x, t) = \frac{1}{2}A_0 + \sum_{n=1}^{\infty}A_ne^{-(n\pi/l)^2kt}\cos\frac{n\pi x}{l}
$$
where $\phi(x)$ is required to have Fourier expansion:

$$
\phi(x) = \frac{1}{2}A_0 + \sum_{n=1}^{\infty}A_n\cos\frac{n\pi x}{l}
$$

##### Homogenous wave equation
$$
u_{tt} = c^2u_{xx}, \quad x \in (0, l)
$$
$$
u_x(0, t) = 0 = u_x(l, t)
$$
$$
u(x, 0) = \phi(x), u_t(x,0) = \psi(x)
$$

Solution:
$$
u(x,t)=\frac{1}{2}A_0 + \frac{1}{2}B_0t + \sum_{n = 1}^\infty \Big(
A_n\cos \frac{n\pi ct}{l}+
B_n\sin \frac{n\pi ct}{l}
\Big)
\cos \frac{n\pi x}{l}
$$
$\phi(x)$ and $\psi(x)$ must satisfy:

$$
\phi(x)=\frac{1}{2}A_0 + \sum_{n = 1}^\infty A_n\cos \frac{n\pi x}{l}
$$

$$
\psi(x)= \frac{1}{2}B_0 + \sum_{n = 1}^\infty
\frac{n\pi c}{l} B_n\cos \frac{n\pi x}{l}
$$

#### 4.3 Robin condition
Solving $-X'' = \lambda X$ with BC
$$
X' - a_0X = 0, \quad x = 0 \newline
X' + a_lX = 0, \quad x = l
$$

##### Positive eigenvalues: $\lambda = \beta^2 >0$
$$
\tag{4.3.10}
\tan \beta l = \frac{(a_0 + a_l)\beta}{\beta^2-a_0a_l}
$$
Eigenfunction:
$$
\tag{4.3.9}
X(x) =C\Big(\cos \beta x+ \frac{a_0}{\beta} \sin \beta x\Big)
$$

By considering graphs of both sides of $(4.3.10)$,

Case 1: 
$a_0 > 0, a_l > 0$: radiation at both ends
$$
n^2\frac{\pi^2}{l^2} < \lambda_n < (n + 1)^2\frac{\pi^2}{l^2}, \quad n \ge 0
$$
$$
\lim_{n\rightarrow \infty}\beta_n - n\frac{\pi}{l} = 0
$$
Case 2: $a_0 < 0, a_l > 0, a_0 + a_l > 0$: more radiation than absorption

There's an eigenvalue
$$
0 < \lambda_0 < \Big(\frac{\pi}{2l}\Big)^2
$$
iff
$$
\tag{4.3.14}
a_0 + a_l > -a_0a_ll
$$

##### Zero eigenvalue
iff
$$
\tag{4.3.15}
a_0 + a_l = -a_0a_ll
$$

##### Negative eigenvalue: $\lambda = -\gamma^2 < 0$

$$
\tag{4.3.16}
\tanh \gamma l = - \frac{(a_0 + a_l)\gamma}{\gamma^2 + a_0a_l}
$$

$$
\tag{4.3.17}
X(x) = \cosh{\gamma x} + \frac{a_0}{\gamma} \sinh \gamma x
$$

Case 1: $a_0 > 0, a_l > 0$: radiation at both ends

No negative eigenvalues

Case 2: $a_0 < 0, a_l > 0, a_0 + a_l > 0$: more radiation than absorption

There's an eigenvalue
iff
$$
\tag{4.3.18}
a_0 + a_l < -a_0a_ll
$$

##### Summary:
Case 1 $\Rightarrow\lambda_n > 0$

Case 2:
- $a_0 + a_l > -a_0a_ll \Rightarrow \lambda_n > 0, n \ge 0$
- $a_0 + a_l = -a_0a_ll \Rightarrow$ $\lambda_0 = 0, \lambda_n > 0, n > 0$ 
- $a_0 + a_l < -a_0a_ll \Rightarrow$ $\lambda_0 < 0, \lambda_n > 0, n > 0$ 

#### Conclusion
Solution:
$$
u(x,t) = \sum_n T_n(t)X_n(x)
$$
where $X_n(x)$ are the eigenfunctions,
$$
T_n(t) = \begin{cases}
A_n e^{-\lambda_n k t} \quad & \text{for diffusion} \\
A_n \cos(\sqrt{\lambda_n}ct) + B_n \sin(\sqrt{\lambda_n}ct) \quad  & \text{for waves} \\
\end{cases}
$$

#### 5.1 
Fourier sine series:
$$
\phi(x) = \sum_{n = 1}^{\infty}A_n \sin\frac{n\pi x}{l}, \quad x\in (0, l)
$$

$$
A_m = \frac{2}{l}\int_0^l \phi(x) \sin\frac{m \pi x}{l} \mathrm{d} x
$$

Fourier cosine series:

$$
\phi(x) = \frac{1}{2}A_0 + \sum_{n = 1}^{\infty}A_n \cos\frac{n\pi x}{l}, \quad x\in (0, l)
$$

$$
A_m = \frac{2}{l}\int_0^l \phi(x) \cos\frac{m \pi x}{l} \mathrm{d} x
$$

Full Fourier series:

$$
\phi(x) = \frac{1}{2}A_0 + \sum_{n = 1}^{\infty}\Big(A_n \cos\frac{n\pi x}{l} + B_n \cos\frac{n\pi x}{l}\Big), \quad x\in (-l, l)
$$
All the eigenfunctions are $\{1, \cos(n\pi x/l), \sin(n\pi x/l)| n>0\}$. Multiply any of them and integrate over the interval gives $0$

$$
A_n = \frac{1}{l}\int_0^l \phi(x) \cos\frac{n \pi x}{l} \mathrm{d} x, \quad n\ge 0
$$

$$
B_n = \frac{1}{l}\int_0^l \phi(x) \sin\frac{n \pi x}{l} \mathrm{d} x, \quad n > 0
$$

##### Fourier Series and boundary conditions
Fourier {cosine, sine} series can be regarded as expansion of arbitrary function which is {even, odd} and has period $2l$ defined for $x\in \real$

From 5.1,
- $u(x, 0) = u(l, 0) = 0$ Dirichlet BCs correspond to the odd extension 
- $u_x(x, 0) = u_x(l, 0) = 0$ Neumann BCs correspond to the even extension 
- $u(l, t) = u(-l, t), u_x(l, t) = u_x(-l, t)$ Periodic BCs correspond to the periodic extension 

#### Complex form of full Fourier series
$$
\phi(x) = \sum_{n=-\infty}^{\infty}c_n e^{in\pi x/l}
$$
$$
c_n = \frac{1}{2l}\int_{-l}^{l}\phi(x) e^{-in\pi x/l} \mathrm{d}x$$

#### Orthogonality and general Fourier series
For $f(x), g(x): [a, b] \rightarrow \real$

Inner product:
$$
(f, g) := \int_a^bf(x)g(x)\mathrm{d}x
$$

Let 
$$
-X_1'' = \frac{\mathrm{d}^2X_1}{\mathrm{d}x^2}=\lambda_1X
$$
$$
-X_2'' = \frac{\mathrm{d}^2X_2}{\mathrm{d}x^2}=\lambda_2X
$$

Every eigenfunction is orthogonal to each other

Green's second identity:
$$
\tag{5.1.3}
\int_a^b(-X_1''X_2+X_1X_2'')\mathrm{d}x = (-X_1'X_2+X_1X_2')\Big|^a_b
$$

Using different boundary conditions:

- Dirichlet: $X_1(a)=X_1(b) =X_2(a)=X_2(b) = 0$
- Neumann: $X_1'(a)=X_1'(b) =X_2'(a)=X_2'(b) = 0$
- Periodic: $X_j(a)=X_j(b), X_j'(a)=X_j'(b), j \in \{1,2\}$
- Robin

For all cases, right side of $(5.1.3) = 0$. $(5.1.3)$ reduces to:
$$
(\lambda_1 - \lambda_2)\int_a^bX_1X_2\mathrm{d}x = 0
$$
$\therefore X_1 \bot X_2$

##### Symmetric boundary conditions
Given any pair of boundary conditions
$$
\tag{5.1.4}
\alpha_1X(a) + \beta_1X(b)+\gamma_1X'(a) + \delta_1X'(b) = 0 \newline
\alpha_2X(a) + \beta_2X(b)+\gamma_2X'(a) + \delta_2X'(b) = 0
$$
Such boundary condition is called *symmetric* if:
$$
f'(x)g(x) - f(x)g'(x) \Big|_{x=a}^{x=b} = 0
$$
for any $f, g$ that satisfy the pair of boundary conditions

All standard boundary conditions are symmetric

##### Theorem 1:
For symmetric boundary conditions, any 2 eigenfunctions that correspond to different eigenvalues are orthogonal. $\therefore$ For any function expanded in a series of these eigenfunctions, the coefficients are determined

Proof:

Let $X_n(x)$ be the eigenfunction with eigenvalue $\lambda_n$
If
$$
\phi(x) = \sum_nA_nX_n(x)
$$
is a convergent series,
$$
(\phi,X_m) = A_m(X_m,X_m)
$$
$$
A_m = \frac{(\phi,X_m)}{(X_m,X_m)} = \frac{(\phi,X_m)}{c_m}
$$

Caution:

1. Mind the convergence of the series
2. $\lambda_1 = \lambda_2$ $\Rightarrow$ the $X_1, X_2$ may not be orthogonal but they can be made so by Gram-Schmdit orthogonalization procedure

#### Complex eigenvalues
Inner product:

For $f(x), g(x): [a, b] \rightarrow \Complex$

$$
(f, g) := \int_a^bf(x)\overline{g(x)}\mathrm{d}x
$$

Boundary condition $(5.1.4)$ is called symmetric or hermitian if:
$$
f'(x)\overline{g(x)} - f(x) \overline{g'(x)} \Big|_{x=a}^{x=b} = 0
$$

##### Theorem 2:

Under the same condition as Theorem 1, all eigenvalues are real, and all eigenfunctions can be chosen to be real valued

#### Negative eigenvalues

##### Theorem 3:
Under the same condition as Theorem 1, if
$$
f(x)f'(x)\Big|_{x=a}^{x=b} \le 0
$$
for all $f(x)$ satisfying the BCs, then there is no negative eigenvalue

This is true for Dirichlet, Neumann, and Periodic conditions but not for some Robin conditions

#### 5.4 Completeness

Consider the eigenvalue problem 
$$
\tag{5.4.1}
X''+\lambda X = 0, x\in(a, b)
$$
with symmetric BC

Theorem 1: There are infinite number of eigenvalues. $\lambda_n \rightarrow \infty$

For any $f: (a, b) \rightarrow \Complex$, its Fourier coefficients are defined as:
$$
A_n = \frac{(f, X_n)}{(X_n, X_n)} = \frac{\int_a^bf(x) \overline{X_n(x)}\mathrm{d}x}{\int_a^b|X_n(x)|^2\mathrm{d}x}
$$
The Fourier series is $\sum_nA_nX_n(x)$

##### Convergence theorems:

Let $f: [a, b] \rightarrow \real$, and consider the Fourier series of $(5.4.1)$

Theorem 2: Uniform convergence

The Fourier series $\sum A_nX_n(x)$ converges uniformly on $[a, b]$ to $f(x)$ if

1. $f(x), f'(x), f''(x)$ exist and are continuous for $x\in [a,b]$
2. $f(x)$ satisfy the BCs

Note: For sine, cosine, full Fourier expansion, $f''(x)$ does not have to exist

Theorem 3: $L^2$ convergence

The Fourier series converges to $f(x)$ in the mean-square sense in $(a, b)$ if
$$
\int_a^b|f(x)|^2\mathrm{d}x < \infty
$$

Theorem 4: Pointwise convergence of classical Fourier series

(i): $f(x)$ is continuous on $[a, b]$ and $f'(x)$ is piecewise continuous on $[a, b]$ $\Rightarrow$ The classical Fourier series converges to $f(x)$ pointwise on $(a, b)$ 

(ii): more generally, $f(x)$ is only piecewise continuous on $[a, b]$ and $f'(x)$ is piecewise continuous on $[a, b]$ $\Rightarrow$ The classical Fourier series converges at every point $x\in \real$ and 
$$
f(x) = \sum_nA_nX_n(x) = \frac{1}{2}[f(x^+) + f(x^-)], x \in (a, b)
$$

Theorem 5: Least square approxmiation

Let ${X_n}$ be any orthogonal set of functions, $\|f\| < \infty$, $N \in \Z^+$ be fixed, then $c_i = A_i, i > 0$ minimizes
$$
\Bigg\|f-\sum_{n = 1}^Nc_nX_n\Bigg\|
$$
where $A_i$ are the Fourier coefficients in $f = \sum A_nX_n$

Bessel's inequality:
$$
\tag{5.4.18}
\sum_{n = 1}^\infty A_n^2 \int_a^b|X_n(x)|^2\mathrm{d}x \le \int_a^b|f(x)|^2 \mathrm{d}x
$$
Norm notation: $\sum_{n = 1}^{\infty}A_n^2\|X_n\|^2 \le \|f\|^2 \Leftrightarrow \sum_{n = 1}^{\infty}\frac{|(f, X_n)|^2}{\|X_n\|^2} \le \|f\|^2$

Theorem 6: The Fourier series of $f$ converges to $f$ in the mean square sense $\Leftrightarrow$
$$
\tag{5.4.19}
\sum_{n = 1}^\infty |A_n|^2 \int_a^b|X_n(x)|^2\mathrm{d}x = \int_a^b|f(x)|^2 \mathrm{d}x
$$
which is the Parseval's equality

Definition: The infinite orthogonal set of functions $\{X_n\}$ is called *complete* if $(5.4.19)$ is true $\forall f$ s.t $\int_a^b|f|^2\mathrm{d}x < \infty$

Corollary 7: $\int_a^b|f|^2\mathrm{d}x < \infty$ $\Rightarrow$ $(5.4.19)$ is true

#### 5.6 Inhomogenous boundary condition

Diffusion equation with sources at both end:
$$
u_t = ku_{xx}, \quad x \in (0, l), t>0 \newline
u(0, t) = h(t), u(l, t) = j(t) \newline
u(x, 0) = 0
$$
Separated solution $u = X(x)T(t)$ will not fit the boundary condition (considering \phi(x) = 0)
##### Expansion method
From 4.1, the correct expansion for $u$ is the Fourier sine series
$$
u(x,t) = \sum_{n=1}^{\infty}u_n(t)\sin\frac{n\pi x}{l}
$$
for some coefficient $u_n(t)$, by the completeness theorems any function in $(0, l)$ can be expanded this way, and by 5.1
$$
u_n(t) = \frac{2}{l}\int_0^l u(x, t)\sin\frac{n\pi x}{l} \mathrm{d}x
$$
Caution: $u$ can't be differentiated term by term.

By considering $\frac{2}{l}\int_0^l(u_t-ku_{xx})\sin\frac{n\pi x}{l}\mathrm{d}x = 0$ (integral valid as thing inside is continuous), an ODE involving $u_n$ can be reached, and with $u_n(0) = 0$,

$$
u_n(t) = Ce^{-\lambda_nkt}-2n\pi l^{-2}k\int_0^te^{-\lambda_nk(t-s)}[(-1)^nj(s)-h(s)]\mathrm{d}s
$$

##### Method of shifting the data
Consider the inhomogenous wave problem:
$$
u_{tt} - c^2u_{xx} = f(x, t) \newline
u(0, t) = h(t), u(l, t) = k(t) \newline
u(x, 0) = \phi(x), u_t(x, 0) = \psi(x)
$$
Let
$$
U(x,t) = \Big(1-\frac{x}{l}\Big)h(t) + \frac{x}{l}k(t)
$$
which satisfy the BCs,
and let
$$
v(x, t) = u(x, t) - U(x,t)
$$
Then $v$ satisfy the same problem but with 0 boundary data, with initial data $\phi(x) - U(x, 0), \psi(x) - U_t(x, 0)$

*The BC and the DE can be simultaneously made homogeneous by subtracting any function that satisfies them*

e.g. when $h, k, f(x)$  are all independent of time, then $-c^2u_{xx}=f(x), U(0) = h, U(l) = k$, and $v(x, t) = u(x, t) - U(x)$ solves the problem with 0 boundary data, zero on RHS of DE, and initial data $\phi(x) - U(x), \psi(x)$

