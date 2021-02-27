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

