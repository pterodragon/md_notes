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

##### "*sifting property*" of continuous-time impulse:
$$x(t) = \int_{-\infty}^{\infty}x(\tau)\delta(t-\tau)\mathrm{d}\tau \qquad (2.27) $$

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

#### 4.5 Multiplication property
$$ r(t) = s(t)p(t) \longleftrightarrow R(j\omega) = \frac{1}{2\pi}\int_{-\infty}^{\infty}S(j\theta)P(j(\omega - \theta))\mathrm{d}\theta \qquad (4.70) $$

#### 4.7 Systems characterized by linear constant-coefficient ODE
$$ \sum_{k=0}^{N}a_k\frac{\mathrm{d}^ky(t)}{\mathrm{d}t^k} = \sum_{k=0}^{M}b_k\frac{\mathrm{d}^kx(t)}{\mathrm{d}t^k} \qquad (4.72) $$ 
$$ H(j\omega) = \frac{Y(j\omega)}{X(j\omega)} = \frac{\sum_{k=0}^{M}b_k(j\omega)^k}{\sum_{k=0}^{N}a_k(j\omega)^k} \qquad (4.76) $$

### Chapter 5
#### 5.1 Discrete time Fourier transform
$$ a_k = \frac{1}{N}X(e^{jk\omega_0}) \qquad (5.5) $$
$$ \boxed{x[n] = \frac{1}{2\pi}\int_{2\pi}X(e^{j\omega})e^{j\omega n}\mathrm{d}\omega \qquad (5.8)} $$
$$ \boxed{X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n]e^{-j\omega n} \qquad (5.9)} $$

Defining $(5.9)$ and using $(3.95)$, $(5.5)$ can be derived. $(5.8)$ is by $(3.94)$ and $(5.5)$ and taking $x[n] = \tilde{x}[n]$ over the interval $\lang N \rang$,
replacing the summation limits to infinity (as $x[n] = 0$ outside that interval), taking Riemann sum as $N \rightarrow \infty$,
$\omega_0 = 2\pi / N \rightarrow 0$

Summation is carried over $N$ consecutive intervals of $\omega_0 = 2\pi/N$, so the resulting interval of integration is $2\pi$

#### 5.2 Fourier transform (periodic signal)
$$ x[n] = e^{j\omega_0 n} \Rightarrow $$
$$ X(e^{j\omega}) = \sum_{l=-\infty}^{\infty} 2\pi \delta(\omega - \omega_0 - 2\pi l) \qquad (5.18) $$
$$x[n]=\sum_{k=\lang N\rang}a_ke^{jk(2\pi/N)n} \Rightarrow $$
$$ X(e^{j\omega}) = \sum_{k=-\infty}^{\infty} 2\pi a_k \delta(\omega - \frac{2\pi k}{N}) \qquad (5.20) $$

#### 5.7.1 Duality in *discrete-time Fourier Series*
Two periodic sequences related by,
$$ f[m] = \frac{1}{N}\sum_{r=\lang N\rang} g[r]e^{-jr(2\pi /N)m} $$
By $(3.95)$,
$$ g[n] \overset{\mathcal{FS}}{\longleftrightarrow} f[k] \qquad (5.66) $$
Let $m = n$ and $r = -k$,
$$ f[n] \overset{\mathcal{FS}}{\longleftrightarrow} \frac{1}{N}g[-k] \qquad (5.67) $$

#### 5.7.2 Duality between the *discrete-time Fourier Transform* and the *continuous-time Fouries Series*
$(5.9)$ and $(3.38)$ are similar, and

$(5.8)$ and $(3.39)$ are similar

#### 5.8 Systems characterized by linear constant-coefficient difference equations
$$ \sum_{k=0}^{N} a_k y[n-k] = \sum_{k=0}^{M} b_k x[n-k] \qquad (5.78) $$
$$ H(e^{j\omega}) = \frac{Y(e^{j\omega})}{X(e^{j\omega})} = \frac{\sum_{k=0}^{M}b_ke^{-jk\omega}}{\sum_{k=0}^{N}a_ke^{-jk\omega}} \qquad (5.80) $$

### Chapter 6

#### 6.2.2 Group delay
$$ \tau(\omega) = -\frac{\mathrm{d}}{\mathrm{d}\omega}\{\angle H(j\omega)\} \qquad (6.14) $$
$\{[\angle H(j\omega)]\}$ is the unwrapped phase, by extending $\omega$ to $\real$

### Chapter 7

#### 7.1.1 Impulse train sampling

$$ x_p(t) = x(t)p(t) \qquad (7.1) $$
$$ p(t) = \sum_{n=-\infty}^{\infty}\delta(t-nT) \qquad (7.2) $$
$$ x_p(t) = \sum_{n=-\infty}^{\infty} x(nT)\delta(t-nT) \qquad (7.3) $$
$$ X_p(j\omega) = \frac{1}{T}\sum_{k=-\infty}^{\infty}X(j(\omega-k\omega_s)) \qquad (7.6) $$

Sampling Theorem:

Let $x(t)$ be band-limited signal with $X(j\omega) = 0$ for $|\omega| > \omega_{M}$.

Then, $x(t)$ is uniquely determined by its sample $\{x(nT) | n \in \N\}$

if $\frac{2\pi}{T} = \omega_{s} > 2\omega_{M}$

To reconstruct $x(t)$, pass the samples through an ideal low-pass filter with cutoff frequency $\omega_{c} \in (\omega_{M}, \omega_{s} - \omega_{M})$ and gain $T$

Nyquist rate $:= 2\omega_{M}$

#### 7.4 Discrete time processing of continuous time signals

![](/images/filtering_continuous_time_signal_using_discrete_system.png)
$$ x_d[n] = x_c(nT) \qquad (7.16) $$
Applying Fourier transform to $(7.3)$,
$$ X_p(j\omega) = \sum_{n=-\infty}^{\infty}x_c(nT)e^{-j\omega nT} \qquad (7.18) $$
$$ X_d(e^{j\Omega}) = \sum_{n=-\infty}^{\infty} x_d[n]e^{-j\Omega n} \qquad (7.19) $$
$$ X_d(e^{j\Omega}) = \sum_{n=-\infty}^{\infty} x_c(nT)e^{-j\Omega n} \qquad (7.20) $$
From $(7.18)$ and $(7.20)$,
$$ X_d(e^{j\Omega}) = X_p(j\Omega / T) \qquad (7.21) $$
Using $(7.6)$,
$$ X_p(j\omega) = \frac{1}{T}\sum_{k=-\infty}^{\infty}X_c(j(\omega-k\omega_s)) \qquad (7.22) $$
$$ X_d(e^{j\Omega}) = \frac{1}{T} \sum_{k=-\infty}^{\infty} X_c(j(\Omega-2\pi k)/T) \qquad (7.23)$$
$$ Y_c(j\omega) = X_c(j\omega) H_d(e^{j\omega T}) \qquad (7.24) $$
For inputs that are sufficiently band-limited,
$$ H_c(j\omega) = 
\begin{cases}
H_d(e^{j\omega T}), & |\omega|<\omega_s/2 \\
0, & |\omega|>\omega_s/2 \\
\end{cases}
\qquad (7.25)
$$ 

#### 7.5 Sampling of discrete time signals

##### 7.5.1 Impulse train sampling
$$
x_p[n] = 
\begin{cases}
x[n], & N | n \\
0, & \text{o.w.}
\end{cases}
\qquad (7.38)
$$
$$ x_p[n] = x[n]p[n] = \sum_{k=-\infty}^{\infty}x[kN]\delta[n-kN] \qquad (7.39) $$
$$ X_p(e^{j\omega}) = \frac{1}{N}\sum_{k=0}^{N-1}X(e^{j(\omega-k\omega_s)}) \qquad (7.42)$$
$(7.42)$ is the counterpart of $(7.6)$

### Chapter 8

#### 8.1.1 Amplitude modulation with a complex exponential carrier

$\omega_c$ is the *carrier frequency*

*carrier signal*:
$$ c(t) = e^{j(\omega_c t + \theta_c)} \qquad (8.1) $$
Let $\theta_c = 0$,
$$ y(t) = x(t)e^{j\omega_c t} \qquad (8.3) $$
From multiplication property,
$$ Y(j\omega) = X(j\omega -j\omega_c) \qquad (8.6) $$

#### 8.1.1 Amplitude modulation with a sinusoidal carrier
$$ c(t) = \cos{(\omega_c t + \theta_c)} \qquad (8.2) $$
From multiplication property,
$$ Y(j\omega) = \frac{1}{2}[X(j\omega - j\omega_c) + X(j\omega + j\omega_c)] \qquad (8.10) $$
Due to the replication of the spectrum, the original signal is recoverable only if $\omega_c > \omega_M$
where $\omega_M$ is the highest frequency of $X(j\omega)$

#### 8.2.1 Synchronous demodulation
Assuming $\omega_c > \omega_M$,
$$ y(t) = x(t) \cos{\omega_c t} \qquad (8.11) $$
$x(t)$ can be recovered using the same sinusoidal carrier and applying a lowpass filter with $\omega \in (\omega_M, 2\omega_c-\omega_M)$ to the result:
$$ w(t) = y(t) \cos{\omega_c t} \qquad (8.12) $$
$$ w(t) = \frac{1}{2}x(t) + \frac{1}{2}x(t)\cos{2\omega_c t} \qquad (8.13) $$
The lowpass filter gets rid of the second term in $(8.13)$

As the modulator and demodulator are synchronized in phrase, the process is referred as *synchronous demodulation*

#### 8.2.2 Asynchronous demodulation
Assuming $\omega_c > \omega_M$ and $|x(t)| > 0$, the *envelope* of $y(t)$ can be a reasonable approximation to $x(t)$.

To ensure $x(t) > 0$, a simple change in the modulator can approximate $x(t) + A$, $|x(t)| \leq K$, $A > K$

$K/A$ is the *modulation index*, or *modulation percent* if written in percentage

##### Tradeoff point 1:

Carrier signal carries no information
- The output $A \cos{\omega_c t}$ can be minimized by decreasing $A$ to increase system efficiency (decrease power to transmit signal).

On the other hand,
- increasing $K/A$ will make the envelope detector more difficult to detect peaks.

##### Tradeoff point 2:
Synchronous demodulation:
- requires more sophisticated demodulator as the oscillator in the demodulator must be synchronized to that of the modulator

On the other hand, asynchronous demodulation
- requires more transmission power, and the cost is offset by saving of receiver cost (as in public broadcasting as receivers can be mass produced)


#### 8.7 Sinusoidal frequency modulation
*angle modulation*:

Carrier:
$$ c(t) = A \cos{(\omega_c t + \theta_c)} = A \cos{\theta(t)} \qquad (8.30) $$
where $\omega_c$ is the frequency, and $\theta_c$ is the phase of the carrier


##### *phase modulation*:
Use the modulating signal $x(t)$ to vary the phase $\theta_c$ so that the modulated signal takes the form:

$$ y(t) = A \cos{[\omega_c t + \theta_c(t)]} \qquad (8.31) $$
$$ \theta_c(t) = \theta_0 + k_p x(t) \qquad (8.32) $$
if $x(t)$ is constant, then phase of $y(t)$ is constant and proportional to the amplitude of $x(t)$

##### *frequency modulation*:
Use the modulating signal $x(t)$ to vary the derivative of the angle proportionally with the modulating singal:

$$ y(t) = A \cos{\theta(t)} \qquad (8.33) $$
$$ \frac{\mathrm{d}\theta(t)}{\mathrm{d}t} = \omega_c + k_f x(t) \qquad (8.34) $$
if $x(t)$ is constant, then $y(t)$ is sinusoidal with a frequency that is offset from the carrier frequency $\omega_c$ by an amount proportional to the amplitude of $x(t)$

--

The two modulation are related. Phase modulating with $x(t)$ is identical to frequency modulating with $\frac{\mathrm{d}x(t)}{\mathrm{d}t}$

--

Frequency modulation with a step $u(t)$ = frequency of carrier signal changes instantaneously from one value to another when $x(t)$ changes value at $0$

Frequency modulation with a ramp $tu(t)$ = frequency of carrier signal changes linearly

For $y(t) = A \cos{\theta(t)}$, the *instantaneous frequency* is
$$ \omega_i(t) = \frac{\mathrm{d}\theta(t)}{\mathrm{d}t} \qquad (8.37) $$

#### 8.7.1 Narrowband frequency Modulation

Let $x(t) = A \cos{{\omega_m} t}$

From $(8.34)$ and $(8.37)$,
$$ \omega_i(t) = \omega_c + k_f A \cos{\omega_m t} \qquad (8.39) $$
Let $\Delta \omega = k_f A$. By $(8.31)$ and $(8.34)$, taking $A = 1$ in the modulated signal and constant of integration $=0$,
$$ \begin{aligned}
    y(t) =& \cos{[\omega_c t + \int x(t) \mathrm{d}t]} \qquad (8.40) \\
         =& \cos{\Big(\omega_c t + \frac{\Delta \omega}{\omega_m} \sin{\omega_m t}\Big)} \qquad (8.41)\\
\end{aligned}
$$

Let $m = \frac{\Delta \omega}{\omega_m}$ be the modulation index, $(8.41)$ becomes
$$ y(t) = \cos{\omega_c t} \cos {(m \sin{\omega_m t})}-\sin{\omega_c t}\sin {(m \sin{\omega_m t})} \qquad (8.43) $$
When $m \ll \pi / 2$,
$$ \cos {(m \sin{\omega_m t})} \approx 1 \qquad (8.44) $$
$$ \sin {(m \sin{\omega_m t})} \approx m\sin{\omega_m t} \qquad (8.45) $$

$(8.43)$ becomes
$$ y(t) \approx \cos{\omega_c t} - m(\sin{\omega_m t})(\sin{\omega_c t}) \qquad (8.46) $$
Comparing to AM-DSB/WC $(8.13)$ taking $x(t) = A\cos{{\omega_m} t}$ which results in the form:
$$ y_2(t) = \cos{\omega_c t} + m (\cos{\omega_m t})(\cos{\omega_c t}) \qquad (8.47) $$
The carrier signal of this has a phrase difference of $\pi /2$ in relation to the AM carrier.

### Chapter 9

#### 9.1 Laplace transform
From Chapter 3, response of a LTI system with impulse response $h(t)$ to a complex exponential input of the form $e^{st}$ is:
$$ y(t) = H(s)e^{st} \qquad (9.1) $$
$$ H(s) = \int_{-\infty}^{\infty} h(t)e^{-st} \mathrm{d}t \qquad (9.2) $$
For $s = j\omega$, $(9.2)$ is the Fourier transform of $h(t)$, for general $s$, it's the *Laplace transform* of $h(t)$
##### Laplace transform of $x(t)$:
$$ \boxed{X(s) := \int_{-\infty}^{\infty} x(t)e^{-st} \mathrm{d}t \qquad (9.3) }$$
$$ X(\sigma + j\omega) := \int_{-\infty}^{\infty} [x(t)e^{-\sigma t}]e^{-j\omega t} \mathrm{d}t \qquad (9.8) $$
$(9.8)$ can be interpreted as the Fourier transform of $x(t)e^{-\sigma t}$

Note the region of converge (ROC), can be different for the same expression $X(s)$

#### 9.2 Region of convergence for Laplace transform
Properties:

1. The ROC of $X(s)$ consists of strips parallel to the $j\omega$-axis in the $s$-plane
2. For rational Laplace transforms ($X(s)$ is rational), the ROC does not contain any poles
3. For $x(t)$ of finite duration and is absolutely integrable, the ROC is the entire $s$-plane
4. If $x(t)$ is right-sided ($x(t) = 0$ for $t < T_1$), if the line $\mathfrak{Re}\{s\} = \sigma_0$ is in the ROC, then all values of s which $\mathfrak{Re}\{s\} > \sigma_0$ will also be in the ROC
5. If $x(t)$ is left-sided ($x(t) = 0$ for $t > T_1$), if the line $\mathfrak{Re}\{s\} = \sigma_0$ is in the ROC, then all values of s which $\mathfrak{Re}\{s\} < \sigma_0$ will also be in the ROC
6. If $x(t)$ is two-sided, if the line $\mathfrak{Re}\{s\} = \sigma_0$ is in the ROC, then the ROC will consist of a strip in the $s$-plane that includes the line $\mathfrak{Re}\{s\} = \sigma_0$
7. If the Laplace transform $X(s)$ of $x(t)$ is rational, then its ROC is bounded by poles or extends to infinity. No poles of $X(s)$ are contained in the ROC
8. If the Laplace transform $X(s)$ of $x(t)$ is rational. If $x(t)$ is right-sided, the ROC is the region in the $s$-plane to the right of the right most pole. Similar for left-sided case.

#### 9.3 Inverse Laplace transform

$$ \boxed{x(t) = \frac{1}{2\pi j}\int^{\sigma+j\infty}_{\sigma-j\infty}X(s)e^{st}\mathrm{d}s \qquad (9.56)} $$

#### 9.5.10 Initial and final value theorems
Initial value theorem:

If $x(t) = 0$ for $t < 0$ and $x(t)$ has no impulse or higher order singularities at the origin
$$ x(0^{+}) = \lim_{s\rightarrow \infty} sX(s) \qquad (9.110) $$

Final value theorem:

If in addition, $\lim_{t\rightarrow \infty} x(t) < 0$, then
$$\lim_{t\rightarrow \infty} x(t) = \lim_{s\rightarrow 0} sX(s) \qquad (9.111) $$

#### 9.7 Characterization of LTI system using Laplace transform
Counterpart in the context of Laplace transforms for the Fourier transform, $H(s)$ is the *transfer function*:
$$ Y(s) = H(s)X(s) \qquad (9.112) $$

##### 9.7.1 Causality
causal system $\Rightarrow$ The ROC associated with the system function is a right-half plane.

For a system with a rational system function, causality of the system $\Leftrightarrow$ ROC being the right-half plane

##### 9.7.2 Stability
By convergence condition of the Fourier transform of the impulse response,

An LTI system is stable $\Leftrightarrow$ ROC of its system function $H(s)$ includes the entire $j\omega$-axis i.e. $\mathfrak{Re}\{s\}=0$

A causal system with rational system function $H(s)$ is stable $\Leftrightarrow$ all the poles are to the left of the $j\omega$-axis

#### 9.7.3 LTI systems characterized by linear coefficient ODE
Consistent with $(4.72)$ and $(4.76)$.
System function for a system characterized by an ODE is always rational, with zeros and poles specified by $(4.76)$

### Chapter 10

#### 10.1 z-transform
$$ \boxed{X(z) := \sum_{n=-\infty}^{\infty}x[n]z^{-n} \qquad (10.3)} $$
$$ X(re^{j\omega}) = \mathcal{F}\{x[n]r^{-n}\} \qquad (10.7) $$

#### 10.2 ROC for z-transform
Properties

1. The ROC of $X(z)$ consists of a ring in the $z$-plane centered about the origin
2. The ROC does not contain any poles
3. $x[n]$ is of finite duration $\Rightarrow$ the ROC is the entire $z$-plane except possibily $z = 0$ and/or $z = \infty$
4. $x[n]$ is a right-sided sequence and the circle $|z| = r_0$ is in the ROC $\Rightarrow$ all finite values $z$ for $|z| > r_0$ will also be in the ROC
5. $x[n]$ is a left-sided sequence and the circle $|z| = r_0$ is in the ROC $\Rightarrow$ all finite values $z$ for $0 < |z| < r_0$ will also be in the ROC
6. $x[n]$ is a two-sided sequence and the circle $|z| = r_0$ is in the ROC $\Rightarrow$ ROC will consists of a ring in the $z$-plane the includes $|z| = r_0$
7. $z$-transform $X(z)$ of $x[n]$ is rational $\Rightarrow$ ROC is bounded by poles or extends to infinity
8. $z$-transform $X(z)$ of $x[n]$ is rational and $x[n]$ is right-sided $\Rightarrow$ ROC is the region in the $z$-plane outside the outermost pole. Also if $x[n]$ is causal, ROC includes $z = \infty$
9. $z$-transform $X(z)$ of $x[n]$ is rational and $x[n]$ is left-sided $\Rightarrow$ ROC is the region in the $z$-plane inside the innermost pole. Also if $x[n]$ is anti-causal, ROC includes $z = 0$

#### 10.3 Inverse z-transform

By $(10.7)$, and taking inverse Fourier transform, using the inverse Fourier transform expression in $(5.8)$, and performing a change of variable $z = re^{j\omega}$ for the integration:

$$ \boxed{x[n] = \frac{1}{2\pi j}\Large{∳}\normalsize X(z) z^{n-1} \mathrm{d}z \qquad (10.41)} $$
The integration is around $|z| = r$ for any value of $r$ for which $X(z)$ converges

#### 10.7.1 Causality
A discrete time LTI system is causal $\Leftrightarrow$ ROC of its system function is the exterior of a circle including infinity

System function $H(z)$ is rational $\Leftrightarrow$ ROC is the exterior of a circle outside the outermost pole and order of numerator cannot be greater than order of denominator ($H(z)$ converges as $z \rightarrow \infty$)

#### 10.7.2 Stability 
An LTI system is stable $\Leftrightarrow$ ROC of its system function includes the unit circle $|z| = 1$

A causal LTI system with rational system function $H(z)$ is stable $\Leftrightarrow$ all the poles of $H(z)$ lie inside the unit circle
