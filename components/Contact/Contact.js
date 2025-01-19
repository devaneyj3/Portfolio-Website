import React, { useState, useEffect } from "react";
import styles from "./contact.module.scss"; // Ensure this path matches the location of your SCSS module file
import emailjs from "@emailjs/browser";

const {
	NEXT_PUBLIC_EMAILJS_PUBLICKEY,
	NEXT_PUBLIC_EMAILJS_SERVICEID,
	NEXT_PUBLIC_EMAILJS_TEMPLATE,
} = process.env;

const Contact = ({ data }) => {
	useEffect(() => emailjs.init(NEXT_PUBLIC_EMAILJS_PUBLICKEY), []);
	const { message } = data;

	// State to manage form inputs
	const [formData, setFormData] = useState({
		contactName: "",
		contactEmail: "",
		contactSubject: "",
		contactMessage: "",
	});

	// State to manage validation errors and success messages
	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState("");

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Validate the form
	const validateForm = () => {
		const errors = {};
		if (!formData.contactName.trim()) {
			errors.contactName = "Name is required.";
		}
		if (!formData.contactEmail.trim()) {
			errors.contactEmail = "Email is required.";
		} else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
			errors.contactEmail = "Email address is invalid.";
		}
		if (!formData.contactMessage.trim()) {
			errors.contactMessage = "Message is required.";
		}
		return errors;
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate form data
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		// If no errors, clear errors and submit form data
		setErrors({});
		try {
			// Use a service like EmailJS or an API endpoint to send the email
			emailjs
				.send(
					NEXT_PUBLIC_EMAILJS_SERVICEID, // Replace with your EmailJS service ID
					NEXT_PUBLIC_EMAILJS_TEMPLATE, // Replace with your EmailJS template ID
					formData
				)
				.then((response) => {
					console.log("SUCCESS!", response.status, response.text);
					setFormData({ name: "", email: "", message: "" });
				})
				.catch((err) => {
					console.error("FAILED...", err);
				});
			setSuccessMessage("Your message was sent successfully!");
			setFormData({
				contactName: "",
				contactEmail: "",
				contactSubject: "",
				contactMessage: "",
			});
		} catch (error) {
			console.error("Failed to send email:", error);
			setSuccessMessage("Failed to send message. Please try again later.");
		}
	};

	return (
		<section className={styles.contact} aria-labelledby="contactFormHeading">
			<h2 id="contactFormHeading">Get In Touch</h2>
			<p className={styles.lead}>{message}</p>

			<form
				method="post"
				className={styles.contactForm}
				name="contactForm"
				aria-labelledby="contactFormHeading"
				onSubmit={handleSubmit}>
				<fieldset>
					<legend>Contact Form</legend>

					<div>
						<label htmlFor="contactName">
							Name <span className={styles.required}>*</span>
						</label>
						<input
							type="text"
							id="contactName"
							name="contactName"
							aria-required="true"
							required
							value={formData.contactName}
							onChange={handleInputChange}
						/>
						{errors.contactName && (
							<p className={styles.error}>{errors.contactName}</p>
						)}
					</div>

					<div>
						<label htmlFor="contactEmail">
							Email <span className={styles.required}>*</span>
						</label>
						<input
							type="email"
							id="contactEmail"
							name="contactEmail"
							aria-required="true"
							required
							value={formData.contactEmail}
							onChange={handleInputChange}
						/>
						{errors.contactEmail && (
							<p className={styles.error}>{errors.contactEmail}</p>
						)}
					</div>

					<div>
						<label htmlFor="contactSubject">Subject</label>
						<input
							type="text"
							id="contactSubject"
							name="contactSubject"
							value={formData.contactSubject}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label htmlFor="contactMessage">
							Message <span className={styles.required}>*</span>
						</label>
						<textarea
							id="contactMessage"
							name="contactMessage"
							rows="5"
							aria-required="true"
							required
							value={formData.contactMessage}
							onChange={handleInputChange}></textarea>
						{errors.contactMessage && (
							<p className={styles.error}>{errors.contactMessage}</p>
						)}
					</div>

					<div>
						<button
							type="submit"
							className={styles.submit}
							aria-label="Submit Contact Form">
							Submit
						</button>
						<span className={styles.imageLoader}>
							<img src="images/loader.gif" alt="Loading" />
						</span>
					</div>
				</fieldset>
			</form>

			{successMessage && (
				<div className={styles.messageSuccess} aria-live="polite">
					<i className="fa fa-check" aria-hidden="true"></i>
					{successMessage}
				</div>
			)}
		</section>
	);
};

export default Contact;
