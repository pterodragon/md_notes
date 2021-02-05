# Signal & Systems

### Chapter 1

#### 1.6.5 Time invariance
$$x(t) \rightarrow y(t) \Rightarrow x(t-t_0) \rightarrow y(t-t_0)$$

#### 1.6.6 Linearity
$$
\begin{cases}
x_1(t) \rightarrow y_1(t) \\
x_2(t) \rightarrow y_2(t)
\end{cases}
\Rightarrow
a x_1(t) + b x_2(t) \rightarrow a y_1(t) + b y_2(t), 
$$

#### 1.7 Continuous unit step and unit impulse
$$ u(t) = \int_{-\infty}^{t}\delta(\tau)\mathrm{d}\tau \qquad (1.71) $$

### Chapter 2

#### 2.1.2 Discrete unit impulse response & convolution
$h(t)$ is the response of $\delta(t)$
$$y[n] = \sum_{k=-\infty}^{\infty}x[k]h[n-k] \qquad (2.6)$$
$$y[n] = x[n]*h[n] \qquad (2.7)$$

#### 2.2.1

##### sifting property:
$$x(t) = \int_{-\infty}^{\infty}x(\tau)\delta(t-\tau)\mathrm{d}\tau$$

#### 2.2.2 Convolution integral
$$y(t)=\int_{-\infty}^{\infty}x(\tau)h(t-\tau)\mathrm{d}\tau \qquad (2.33)$$
$$y(t)=x(t)*h(t) \qquad (2.34)$$

### Chapter 3

#### 3.3.2 Fourier Series (continuous)
$\omega_0=\frac{2\pi}{T}$
$$x(t)=\sum_{k=-\infty}^{\infty}a_ke^{jk\omega_0t} \qquad (3.38)$$
$$a_k = \frac{1}{T}\int_Tx(t)e^{-jk\omega_0t}\mathrm{d}t \qquad (3.39)$$

#### 3.6.1
$\omega_0=\frac{2\pi}{N}$
$$\phi_k[n]=e^{jk\omega_0n} \qquad (3.85)$$
There're only $N$ distinct signals as $\phi_k[n]=\phi_{k+N}[n]$

#### 3.6.2
$$x[n]=\sum_{k=\lang N\rang}a_ke^{jk\omega_0n} \qquad (3.94) $$
$$a_k = \frac{1}{N}\sum_{n=\lang N\rang}x[n]e^{-jk\omega_0n} \qquad (3.95) $$

#### 3.8
Frequency response = Fourier transform of impulse response:
$$ H(j\omega) = \int_{-\infty}^{\infty}h(t)e^{-j\omega t}\mathrm{d}t \qquad (3.121)$$

### Chapter 4

#### 4.1.1 Fourier transform (aperiodic signal)
$$ x(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty}X(j\omega)e^{j\omega t}\mathrm{d}\omega \qquad (4.8) $$
$$ X(j\omega) = \int_{-\infty}^{\infty}x(t)e^{-j\omega t}\mathrm{d} t \qquad (4.9) $$
Both $(4.8)$ and $(3.38)$ represents linear combination of complex exponentials.

The periodic case has discrete set of them and are harmonically related: $\{k\omega_0| k=\N\}$

For the aperiodic case, the complex exponentials occur at a continuum of frequencies with amplitute $X(j\omega)(\mathrm{d}\omega/2\pi)$

#### 4.4 Convolution property
$$y(t)=h(t)*x(t)\overset{\mathcal{F}}{\longleftrightarrow} Y(j\omega) = H(j\omega)X(j\omega) \qquad (4.56)$$
