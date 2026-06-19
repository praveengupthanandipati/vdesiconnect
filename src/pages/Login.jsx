import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const OTP_LEN = 6;

const COUNTRY_CODES = [
  { code: "+1", flag: "🇺🇸", label: "+1  USA" },
  { code: "+91", flag: "🇮🇳", label: "+91 India" },
  { code: "+44", flag: "🇬🇧", label: "+44 UK" },
  { code: "+61", flag: "🇦🇺", label: "+61 Australia" },
  { code: "+49", flag: "🇩🇪", label: "+49 Germany" },
  { code: "+971", flag: "🇦🇪", label: "+971 UAE" },
];

// ── Brand icons ────────────────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width={20} height={20}>
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={18}
    height={18}
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z" />
  </svg>
);

// ── Component ──────────────────────────────────────────────────────────────
const Login = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState("phone"); // 'phone' | 'otp' | 'success'
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(Array(OTP_LEN).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [resendKey, setResendKey] = useState(0);

  const otpRefs = useRef([]);
  const timerRef = useRef(null);

  // countdown whenever OTP step is active or resend is triggered
  useEffect(() => {
    if (step !== "otp") return;
    setTimer(30);
    setCanResend(false);
    timerRef.current = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setCanResend(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [step, resendKey]);

  // ── Phone step ────────────────────────────────────────────────────────────
  const sendOtp = () => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7) {
      setError("Please enter a valid phone number.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      setTimeout(() => otpRefs.current[0]?.focus(), 120);
    }, 1000);
  };

  // ── OTP step ──────────────────────────────────────────────────────────────
  const handleOtpChange = (i, val) => {
    if (!/^\d*$/.test(val)) return;
    const next = [...otp];
    next[i] = val.slice(-1);
    setOtp(next);
    setError("");
    if (val && i < OTP_LEN - 1) otpRefs.current[i + 1]?.focus();
  };

  const handleOtpKey = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0)
      otpRefs.current[i - 1]?.focus();
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LEN);
    if (!pasted) return;
    const next = Array(OTP_LEN).fill("");
    pasted.split("").forEach((d, i) => (next[i] = d));
    setOtp(next);
    const focus = Math.min(pasted.length, OTP_LEN - 1);
    otpRefs.current[focus]?.focus();
  };

  const verifyOtp = () => {
    if (otp.join("").length < OTP_LEN) {
      setError("Please enter all 6 digits.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("success");
      setTimeout(() => navigate("/user/profile"), 1800);
    }, 1000);
  };

  const resendOtp = () => {
    setOtp(Array(OTP_LEN).fill(""));
    setResendKey((k) => k + 1);
    setTimeout(() => otpRefs.current[0]?.focus(), 100);
  };

  const changeNumber = () => {
    setStep("phone");
    setOtp(Array(OTP_LEN).fill(""));
    setError("");
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo */}
        <Link to="/" className="login-card__logo">
          <img src={logo} alt="VDesiConnect" />
        </Link>

        {/* ── STEP: Phone ─────────────────────────────── */}
        {step === "phone" && (
          <div className="login-step">
            <h1 className="login-card__title">Welcome to VDesiConnect</h1>
            <p className="login-card__sub">
              Enter your phone number to login or create an account
            </p>

            <label className="login-label">
              <PhoneIcon /> Phone Number
            </label>

            <div className="login-phone-row">
              <select
                className="login-phone-row__code"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.label} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                className="login-phone-row__input"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && sendOtp()}
                autoFocus
              />
            </div>

            {error && <p className="login-error">{error}</p>}

            <button className="login-btn" onClick={sendOtp} disabled={loading}>
              {loading ? <span className="login-btn__spinner" /> : "Send OTP"}
            </button>

            {/* Divider */}
            <div className="login-divider">
              <span>or continue with</span>
            </div>

            {/* Social */}
            <div className="login-social">
              <button className="login-social__btn login-social__btn--google">
                <GoogleIcon />
                Continue with Google
              </button>
              <button className="login-social__btn login-social__btn--fb">
                <FacebookIcon />
                Continue with Facebook
              </button>
            </div>

            <p className="login-terms">
              By continuing, you agree to our{" "}
              <Link to="/terms">Terms of Service</Link> and{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
          </div>
        )}

        {/* ── STEP: OTP ───────────────────────────────── */}
        {step === "otp" && (
          <div className="login-step">
            <div className="login-otp-header">
              <div className="login-otp-header__icon">
                <PhoneIcon />
              </div>
              <h1 className="login-card__title">Verify Your Number</h1>
              <p className="login-card__sub">
                We've sent a 6-digit OTP to{" "}
                <strong>
                  {countryCode} {phone}
                </strong>
              </p>
            </div>

            {/* OTP boxes */}
            <div className="login-otp-boxes">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (otpRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  className={`login-otp-box${digit ? " login-otp-box--filled" : ""}`}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKey(i, e)}
                  onPaste={i === 0 ? handlePaste : undefined}
                  autoComplete="one-time-code"
                />
              ))}
            </div>

            {error && <p className="login-error">{error}</p>}

            <button
              className="login-btn"
              onClick={verifyOtp}
              disabled={loading}
            >
              {loading ? <span className="login-btn__spinner" /> : "Verify OTP"}
            </button>

            {/* Resend + change */}
            <div className="login-resend">
              {canResend ? (
                <button className="login-resend__link" onClick={resendOtp}>
                  Resend OTP
                </button>
              ) : (
                <span className="login-resend__timer">
                  Resend OTP in <strong>{timer}s</strong>
                </span>
              )}
              <span className="login-resend__sep">·</span>
              <button className="login-resend__link" onClick={changeNumber}>
                Change Number
              </button>
            </div>
          </div>
        )}

        {/* ── STEP: Success ────────────────────────────── */}
        {step === "success" && (
          <div className="login-success">
            <div className="login-success__circle">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width={36}
                height={36}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="login-success__title">Login Successful!</h2>
            <p className="login-success__sub">
              Redirecting you to your profile…
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
