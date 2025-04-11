import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/turnirlar-img-bg.png'
import { useLanguage } from '../context/LanguageContext'

const ComingSoon = () => {
	const { language } = useLanguage()

	const getHeroText = () => {
		switch(language) {
			case 'uz':
				return "ESPORT TURNIRLARINI BOSHLANG"
			case 'ru':
				return "НАЧНИТЕ ТУРНИРЫ ПО КИБЕРСПОРТУ"
			case 'en':
				return "START ESPORTS TOURNAMENTS"
			default:
				return "ESPORT TURNIRLARINI BOSHLANG"
		}
	}

	const getButtonText = () => {
		switch(language) {
			case 'uz':
				return "TURNIRLAR"
			case 'ru':
				return "ТУРНИРЫ"
			case 'en':
				return "TOURNAMENTS"
			default:
				return "TURNIRLAR"
		}
	}

	const getDescriptionText = () => {
		switch(language) {
			case 'uz':
				return (
					<>
						<p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-relaxed font-kanit font-bold">
							🕹 Revolix — bu faqat o'yinga emas, g'alabaga tayyorlanishdir.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							CS2, PUBG Mobile, Dota 2, Mobile Legends va boshqa o'yinlar bo'yicha eng qizg'in turnirlar shu yerda!
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							🎯 Reytinglar. 📈 Statistika. 🏆 Chempionlar.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							🌐 Hamma narsa bitta platformada — Revolix.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
							🚀 Tez orada ishga tushamiz. Bizni kuting!
						</p>
					</>
				)
			case 'ru':
				return (
					<>
						<p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-relaxed">
							🕹 Revolix — это не просто игра, это подготовка к победе.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							Самые горячие турниры по CS2, PUBG Mobile, Dota 2, Mobile Legends и другим играм здесь!
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							🎯 Рейтинги. 📈 Статистика. 🏆 Чемпионы.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							🌐 Все на одной платформе — Revolix.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
							🚀 Скоро запускаемся. Ждите нас!
						</p>
					</>
				)
			case 'en':
				return (
					<>
						<p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-relaxed">
							🕹 Revolix — it's not just about gaming, it's about preparing for victory.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							The hottest tournaments for CS2, PUBG Mobile, Dota 2, Mobile Legends and other games are here!
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							🎯 Ratings. 📈 Statistics. 🏆 Champions.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							🌐 Everything on one platform — Revolix.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
							🚀 Launching soon. Stay tuned!
						</p>
					</>
				)
			default:
				return (
					<>
						<p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-relaxed">
							🕹 Revolix — bu faqat o'yinga emas, g'alabaga tayyorlanishdir.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							CS2, PUBG Mobile, Dota 2, Mobile Legends va boshqa o'yinlar bo'yicha eng qizg'in turnirlar shu yerda!
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							🎯 Reytinglar. 📈 Statistika. 🏆 Chempionlar.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
							🌐 Hamma narsa bitta platformada — Revolix.
						</p>
						<p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
							🚀 Tez orada ishga tushamiz. Bizni kuting!
						</p>
					</>
				)
		}
	}

	return (
		<div className="relative min-h-[calc(100vh)] flex items-center">
			{/* Background Image with Overlay */}
			<div 
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute inset-0 bg-black/50"></div>
			</div>

			{/* Content */}
			<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-15">
				<div className="max-w-[1200px] py-8 sm:py-12 md:py-16">
					
					
					{getDescriptionText()}
					
					
				</div>
			</div>
		</div>
	)
}

export default ComingSoon 