### Math review

#### Cross product
$$ \bold{a} \times \bold{b} = \|\bold{a}\| \|\bold{b}\| \sin(\theta) \bold{\hat{n}} $$
where $\bold{\hat{n}}$ is a unit vector $\bot$ to the plane containing $\bold{a}$ and $\bold{b}$ according to right-hand rule
$$ \bold{a} \times \bold{b} = \begin{vmatrix}
\bold{i} & \bold{j} & \bold{k} \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3 \\
\end{vmatrix} $$


##### properties
$$ \boxed{\bold{a} \times \bold{b} = - ( \bold{b} \times \bold{a} )}, \boxed{\bold{a} \times \bold{a} = \bold{0}} $$
$$ \boxed{\bold{i} \times \bold{j} = \bold{k}}, \boxed{\bold{j} \times \bold{k} = \bold{i}}, \boxed{\bold{k} \times \bold{i} = \bold{j}} $$

#### Divergence
$$ \mathrm{div} \ \bold{F} = \nabla \cdot \bold{F} $$

$\nabla \cdot \bold{F}|_{\bold{x_0}} > 0$ means there's positive flow outwards at $\bold{x_0}$

#### Curl
$$ \mathrm{curl} \ \bold{F} = \nabla \times \bold{F} $$
$$ \nabla \times \bold{F} =
\begin{vmatrix}
\bold{i} & \bold{j} & \bold{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z
\end{vmatrix}
$$

#### Line integral
$$ \int_{\mathcal{C}} F(\bold{r})\mathrm{d}s=\int_a^b F(\bold{r}(t))|\bold{r}'(t)|\mathrm{d}t $$
where $\bold{r}: [a, b] \rightarrow \mathcal{C}$ is a bijective parametrization of $\mathcal{C}$
##### Gradient theorem (fundamental theorem of line integral)
$$\int_a^b\nabla F(\bold{r}(t))\cdot \mathrm{d}\bold{r}=F(\bold{r}(b))-F(\bold{r}(a))$$
Note: $\mathrm{d}\bold{r} = \bold{r}'(t)\mathrm{d}t$

#### Green's theorem
$$ \iint_{D} \bigg(\frac{\partial{M}}{\partial{x}}-\frac{\partial{L}}{\partial{y}}\bigg) \mathrm{d}x\mathrm{d}y= \oint_{\partial D} L \mathrm{d}x+M\mathrm{d}y$$
Intepretation: macroscopic circulation around $\partial D$ is the same as sum of microscopic circulation inside $D$ 


#### Divergence theorem
$$ \iiint_{D} \nabla \cdot \bold{F} \ \mathrm{d}V = \oiint_{\partial{D}}\big( \bold{F} \cdot \bold{\hat{n}} \big) \mathrm{d}S $$
$\bold{\hat{n}}$ is the outward-pointing unit normal vector to the surface $\partial{D}$

Picking the normal to be $\lang \mathrm{d}y, -\mathrm{d}x, 0\rang$, we get the Green's theorem for the 2D case

#### Stoke's theorem

$$ \iint_{\Sigma} \big(\nabla \times \bold{F}\big)\cdot \mathrm{d} \bold{S} =\iint_{\Sigma} \big(\nabla \times \bold{F}\big)\cdot \bold{\hat{n}} \ \mathrm{d} S = \oint_{\partial \Sigma} \bold{F} \cdot \mathrm{d} \bold{r} $$
where $\bold{r}$ is tangential to the curve $\partial \Sigma$, $\bold{\hat{n}}$ is the outward-pointing unit normal vector to the surface $\Sigma$ 

Setting $\bold{k}=0$, we get Green's theorem. Stoke's theorem is just Green's theorem with a 2D surface floating in a 3D surface not necessarily on the x-y plane

##### Ref:
Green's theorem, Divergence theorem, and Stoke's theorem
https://www.youtube.com/watch?v=PIoqMNL7tV0&list=PLHXZ9OQGMqxfW0GMqeUE1bLKaYor6kbHa&index=39


#### Types of convergence
##### Pointwise convergece
Let $f_n(x): I \rightarrow \real, n\ge0$ be a sequence of functions, then

$f_n(x)$ converges pointwise on $I$ $\Leftrightarrow$ $f_n(x_0)$ converges $\forall x_0 \in I$

The limit is defined by
$$
f(x_0) = \lim_{n\rightarrow \infty}f_n(x_0), \quad x_0 \in I \newline
f(x) = \lim_{n\rightarrow \infty}f_n(x), \quad x \in I; \newline
f_n(x) \rightarrow f(x) \quad \text{on}\  I
$$

##### Uniform convergece
Let $f_n(x): I \rightarrow \real, n\ge0$ be a pointwise convergent sequence of functions, and $f(x) = \lim_{n\rightarrow\infty}f_n(x)$ on $I$

$f_n(x)$ converges uniformly on $I$ to $f(x)$, i.e. $f_n(x) \rightrightarrows f(x)$ on $I$ $\Leftrightarrow$ on $I$,
$$
\epsilon > 0, n \gg 1 \Rightarrow |f_n(x)-f(x)| < \epsilon
$$
$n \gg 1$ means for some $n > N_\epsilon$ depending only on $\epsilon$ *but not $x$*
