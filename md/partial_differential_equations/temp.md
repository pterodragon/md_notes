#### 8.1

##### Finite differences
Let $u_j \sim u(j\Delta x)$, where $\Delta x$ is the *mesh size*

Approximation for 1st derivative $\frac{\partial u}{\partial x}(j\Delta x)$:
$$
\frac{u_j - u_{j-1}}{\Delta x} \quad \text{Backward difference}
$$
$$
\frac{u_{j + 1} - u_{j}}{\Delta x} \quad \text{Forward difference}
$$
$$
\frac{u_{j + 1} - u_{j - 1}}{2\Delta x} \quad \text{Centered difference}
$$
Theses are correct approximation by the taylor series of $u(x + \Delta x)$ and $u(x - \Delta x)$ 

There centered difference is correct approximation to the order $O(\Delta x)^2$, where the others are to the order $O(\Delta x)$

For second derivative:
$$
u''(j\Delta x) \sim \frac{u_{j+1}-2u_j+u_{j-1}}{(\Delta x)^2}
$$

For two variables, choose two mesh sizes:
$$
u(j\Delta x, n\Delta t) \sim u_j^n
$$
Then forward difference for $\frac{\partial u}{\partial t}$:
$$
\frac{\partial u}{\partial t}(j\Delta x, n\Delta t) \sim \frac{u_j^{n+1}-u_j^n}{\Delta t}
$$

#### Approximation of diffusion
For the problem:
$$
u_t = u_{xx}, \quad x \in (0, \pi), t > 0 \newline
u = 0, \quad x = 0,\pi \newline
u(x, 0) = \phi(x) = \begin{cases}
x, & x \in (0, \frac{\pi}{2}) \\
\pi - x, & x \in (\frac{\pi}{2}, \pi) \\
\end{cases}
$$
Let
$$
s = \frac{\Delta t}{(\Delta x)^2}
$$
$$
\tag{8.2.2}
u_j^{n+1} = s(u_{j+1}^n+u_{j-1}^n)+(1-2s)u_j^n
$$
Looking for solution of the form (separate the variables in the difference equation)
$$
\tag{8.2.4}
u_j^n = X_jT_n
$$
Then
$$
\tag{8.2.5}
\frac{T_{n+1}}{T_n}=1-2s+s\frac{X_{j+1}+X_{j-1}}{X_j}
$$
Both sides of $(8.2.5)$ must be a constant $\xi$ independent of $j$ and $n$, therefore
$$
\tag{8.2.6}
T_n = \xi^nT_0
$$
$$
\tag{8.2.7}
s\frac{X_{j+1}+X_{j-1}}{X_j} + 1 - 2s = \xi
$$
This is a discrete version of 2nd order ODE, so guess the solution of the form $X_j = a\cos j\theta+b\sin j\theta$, and by using the BCs:
$$
X_j = \sin(jk\Delta x)
$$
$(8.2.7)$ takes the form
$$
\tag{8.2.9}
\xi = \xi(k) = 1 - 2s[1-\cos(k\Delta x)]
$$

By $(8.2.6)$, the growth in time $t = n\Delta t$ at the wave number $k$ is governed by $\xi(k)$. The scheme is unstable unless $|\xi(k)| \le 1 \ \forall k$

Therefore stability requires:
$$
\frac{\Delta t}{(\Delta x)^2} = s \le \frac{1}{2}
$$

By assuming the following, $(8.2.9)$ can be derived from $(8.2.7)$ quickly:
$$
X_j = (e^{ik\Delta x})^j
$$

There exists unconditionally stable scheme like the Crank-Nicolson scheme
