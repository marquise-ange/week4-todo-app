
import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <header class="border-b border-[#e8e5db]">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <a href="#" class="flex items-center gap-3 no-underline">
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#245b43] text-xl text-white" aria-hidden="true">
          ✓
        </span>
        <span class="text-2xl font-bold tracking-tight text-[#245b43]">
          TaskFlow
        </span>
      </a>

      <a
        href="#tasks"
        class="rounded-full bg-[#245b43] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#194632] focus:outline-none focus:ring-4 focus:ring-[#477858]/30"
      >
        Get Started →
      </a>
    </nav>
  </header>

  <main>
    <section class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full border border-[#d9e5d9] bg-[#edf4eb] px-4 py-2 text-sm font-medium text-[#245b43]">
          <span class="h-2 w-2 rounded-full bg-[#56866a]" aria-hidden="true"></span>
          A calmer way to get things done
        </span>

        <h1 class="mt-7 max-w-xl text-5xl leading-tight font-bold tracking-tight text-[#24382d] sm:text-6xl">
          Make room for
          <span class="text-[#477858]">what matters.</span>
        </h1>

        <p class="mt-6 max-w-lg text-lg leading-8 text-[#73796f]">
          Your days are full of possibilities. Organize your tasks,
          celebrate your progress, and focus on one thing at a time.
        </p>

        <div class="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#tasks"
            class="rounded-full bg-[#245b43] px-7 py-4 font-semibold text-white no-underline shadow-lg shadow-[#245b43]/15 transition hover:-translate-y-0.5 hover:bg-[#194632] focus:outline-none focus:ring-4 focus:ring-[#477858]/30"
          >
            Start planning <span aria-hidden="true">→</span>
          </a>

          <span class="text-sm text-[#73796f]">
            One step at a time.
          </span>
        </div>

        <div class="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#e8e5db] pt-6">
          <div>
            <p class="text-xl font-bold text-[#245b43]">01</p>
            <p class="mt-1 text-sm text-[#73796f]">Find your focus</p>
          </div>

          <div>
            <p class="text-xl font-bold text-[#245b43]">02</p>
            <p class="mt-1 text-sm text-[#73796f]">Make a plan</p>
          </div>

          <div>
            <p class="text-xl font-bold text-[#245b43]">03</p>
            <p class="mt-1 text-sm text-[#73796f]">Make it happen</p>
          </div>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-md">
        <div class="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-[#e5ead8] blur-2xl" aria-hidden="true"></div>
        <div class="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-[#e6d8bc] blur-2xl" aria-hidden="true"></div>

        <div class="relative rounded-[2rem] border border-[#e8e5db] bg-white p-6 shadow-2xl shadow-[#24382d]/5 sm:p-8">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-[#73796f]">YOUR DAY, YOUR WAY</p>
              <h2 class="mt-2 text-2xl font-bold text-[#24382d]">A little progress</h2>
            </div>

            <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4eb] text-2xl" aria-hidden="true">
              ☀
            </span>
          </div>

          <div class="mt-7 rounded-2xl bg-[#f8f7f2] p-4">
            <div class="flex items-center justify-between text-sm">
              <span class="font-medium text-[#24382d]">Today's focus</span>
              <span class="text-[#477858]">2 of 4</span>
            </div>

            <div class="mt-3 h-2 overflow-hidden rounded-full bg-[#e5e7dc]" role="progressbar" aria-label="Example daily progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div class="h-full w-1/2 rounded-full bg-[#477858]"></div>
            </div>
          </div>

          <div class="mt-6 space-y-3">
            <div class="flex items-center gap-3 rounded-2xl border border-[#e8e5db] p-4">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#477858] text-sm text-white" aria-hidden="true">✓</span>
              <span class="flex-1 text-sm text-[#92958b] line-through">Plan the week ahead</span>
              <span class="text-xs text-[#477858]">Done</span>
            </div>

            <div class="flex items-center gap-3 rounded-2xl border border-[#d9e5d9] bg-[#f5f8f2] p-4">
              <span class="h-6 w-6 rounded-full border-2 border-[#477858]" aria-hidden="true"></span>
              <span class="flex-1 text-sm font-medium text-[#24382d]">Study something new</span>
              <span class="rounded-full bg-[#e8eee0] px-2 py-1 text-xs text-[#477858]">Focus</span>
            </div>

            <div class="flex items-center gap-3 rounded-2xl border border-[#e8e5db] p-4">
              <span class="h-6 w-6 rounded-full border-2 border-[#d7d8cf]" aria-hidden="true"></span>
              <span class="flex-1 text-sm text-[#73796f]">Take a mindful break</span>
            </div>

            <div class="flex items-center gap-3 rounded-2xl border border-[#e8e5db] p-4">
              <span class="h-6 w-6 rounded-full border-2 border-[#d7d8cf]" aria-hidden="true"></span>
              <span class="flex-1 text-sm text-[#73796f]">Celebrate small wins</span>
            </div>
          </div>

          <div class="mt-6 rounded-2xl bg-[#245b43] p-5 text-white">
            <p class="text-sm text-white/75">A reminder for today</p>
            <p class="mt-2 text-lg font-semibold">Progress over perfection.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-[#e8e5db] bg-[#f0efe7]">
      <div class="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3 sm:gap-10">
        <article>
          <span class="text-2xl" aria-hidden="true">✳</span>
          <h2 class="mt-3 text-lg font-bold text-[#24382d]">Clear your mind</h2>
          <p class="mt-2 leading-7 text-[#73796f]">
            Put your thoughts into a simple plan instead of carrying everything in your head.
          </p>
        </article>

        <article>
          <span class="text-2xl" aria-hidden="true">↗</span>
          <h2 class="mt-3 text-lg font-bold text-[#24382d]">Find your rhythm</h2>
          <p class="mt-2 leading-7 text-[#73796f]">
            Choose what matters most and take the next small step at your own pace.
          </p>
        </article>

        <article>
          <span class="text-2xl" aria-hidden="true">♡</span>
          <h2 class="mt-3 text-lg font-bold text-[#24382d]">Celebrate progress</h2>
          <p class="mt-2 leading-7 text-[#73796f]">
            Every completed task is a small win worth recognizing.
          </p>
        </article>
      </div>
    </section>

    <section id="tasks" class="mx-auto max-w-4xl scroll-mt-8 px-6 py-20">
      <div class="text-center">
        <p class="text-sm font-semibold tracking-widest text-[#477858] uppercase">
          Your next chapter
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#24382d] sm:text-4xl">
          Let's make today count.
        </h2>

        <p class="mx-auto mt-4 max-w-xl leading-7 text-[#73796f]">
          Your personal task list starts here. Choose one thing you want to accomplish.
        </p>
      </div>

      <div class="mt-8 rounded-3xl border border-[#e8e5db] bg-white p-6 text-center shadow-sm sm:p-10">
        <p class="text-lg font-semibold text-[#24382d]">
          Your task list is coming next!
        </p>

        <p class="mt-2 text-sm leading-6 text-[#73796f]">
          Soon you'll be able to add tasks, set priorities, track progress, and keep everything saved.
        </p>
      </div>
    </section>
  </main>

  <footer class="border-t border-[#e8e5db] px-6 py-8 text-center">
    <p class="text-sm text-[#73796f]">
      Made for your goals, your growth, and your next small win.
    </p>
    <p class="mt-2 text-sm font-semibold text-[#245b43]">
      TaskFlow © 2026
    </p>
  </footer>
`
