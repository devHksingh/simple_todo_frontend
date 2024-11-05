import office1 from '../assets/office-long-1.webp'
import office2 from '../assets/office-long-2.webp'

const About = () => {
  return (
    <div className="container mx-auto">
        <div className="flex flex-col items-center max-w-screen-lg gap-16 mx-auto mt-8 md:grid-cols-2 lg:py-16 lg:px-6 md:grid">
            <div className="font-light sm:text-lg">
                <h2
                className="mb-4 text-4xl font-extrabold tracking-tight "
                >About Us</h2>
                <p className="mb-4">Welcome to YourTodo, your go-to application for staying organized and productive! Our mission is simple: to provide a powerful, intuitive tool that helps you keep track of all your tasks and goals in one place. Whether you're managing daily errands, project tasks, or long-term goals, YourTodo is designed to make organizing your life effortless and efficient.</p>
                <p>We believe in simplicity and productivity, which is why we created a platform that’s easy to use yet packed with powerful features to keep you on track. From work to personal life, YourTodo is here to help you stay focused, organized, and in control.</p><br/>
                <h2 className="mb-4 text-3xl font-bold tracking-tight">Why Choose YourTodo?</h2>
                <p>Our application is designed with you in mind. With a sleek, user-friendly interface and customizable features, YourTodo is crafted to fit seamlessly into your daily routine. Whether you’re a busy professional, a student, or anyone looking to stay organized, YourTodo has something to offer you.

                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className='w-full rounded-lg' src={office1} alt="office env"/>
                <img className='w-full mt-4 rounded-lg lg:mt-10' src={office2} alt="office env"/>
            </div>
        </div>
    </div>
  )
}

export default About