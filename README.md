

# StudyingNx (real case)

This project was generated using [Nx](https://nx.dev) and was used to define (or not) Nx as a solution in a real case.

## The case

In this case, the system has been working a take of while already and has these main characteristics:

- Monolith created by [vue-cli](https://cli.vuejs.org/guide/cli-service.html)
- [Vue (JS Framework)](https://cli.vuejs.org)
- The frontend team (and the company itself) has been growing significantly
- The frontend team has a good communication and they wanna keep it as possible
- The company is focused on quality, even if sometimes they reduce speed (development-wise, relaease-wise)
- The company structure has cross-context squads
- Coupled code

The team has been resistant to working with polyrepos. First, because the company structure does not favor a polyrepo approach, once some squads have cross-context in the FrontEnd repository; the team wanna preserve their good communication, which can be harder with polyrepos (regarding their previous experiences). `Even if said those points, it's important to understand that **repository management** (monorepo and polyrepo) is just a **step** into the architecture definition. And they do not necessarily exclude any pattern. E.g. we can have a monorepo orchestrating a micro frontend system, even though is usually applied in the polyrepo context.`

## Proposal (Nx and Module Federation)

### Before get started

It’s important to keep in mind that there are different approaches to solving that problem, and unfortunately and likely, all of them will have their problems. So, let's *bloom* our analytic part and keep our eyes on the prize: solve our problem. This way, even if we get a un perfection solution, we'll get one of the best ones!

### Which problem do we want to solve?

Let's understand which problems the company wanna solve.

1) **Team growth:** It’s easy to see how the team has been growing up. When there are a big team and a coupled code, things become hard to take care of. Even more, a project that has been created using a normal CLI, which is unprepared for scalable teams. So, we gonna prepared the code to be more uncoupled and support that growth.

2) **CI/CD:** Once the project has grown up, CI/CD starts becoming lower more and more. Developers need to wait a long time to validate their commits (runs installation, build, test). So, the team has asked themrselves about possibilities to reduce that time and delivery faster.

3) **JS Framework agnostic:** For this topic, there are two reasons: 1) The team can start working with Vue’s Frameworks, as Nuxt; 2) Today, most of our team have more Vue experience and we know isn’t that easy to find people with it. Once know that and consider the team will keep growing, make sense we have the possibility of working with different frameworks. **Not to change what we have created, by thinking in new contexts.**

4) **DevExp:** Working with system development is a challenge, everybody knows that. So, adding a tool that can improve our DevExp, helping us in terms of code management, project and team structure, speed (locally and/or remotely), and automation is a good bet.

### Who is Nx?

> Nx is a smart, fast, and extensible build system with first class monorepo support and powerful integrations.
> 

We can get this part “extensible build system” and split it into two-part: Extensible: It’s extensible because Nx gives the environment to scale our system in an uncoupled way.  Build system: Because it automates the creation of executable applications from source code.

So, in my eyes, Nx allows us to create a scalable project structure and also gives us tools to make more automatic as possible.

### Pros & Cons

**Pros:** 

- Generation of interactive graphs showing project structure, using *dep-graph* command;

![Screen Shot 2022-03-22 at 11.15.40.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e458d25-d4f7-47ae-bb61-e0492f9b9739/Screen_Shot_2022-03-22_at_11.15.40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220519T092407Z&X-Amz-Expires=86400&X-Amz-Signature=763f8a27ff0fb2cbba634380bfb9347b1b49c38500b3addc96a8024eea194f09&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%2520Shot%25202022-03-22%2520at%252011.15.40.png%22&x-id=GetObject)

- Avoid running scripts in unnecessary modules, using *affected* command
- Using *generation* command to use Nx boilerplates (we can also create our own)
- Avoid running scripts in unnecessary modules, once those were cached
- Rich documentation
- Open-source project (created by a company) focusing in build  monorepo’s tools
- Rich community - including slack workspace
- Easy update (by migration command)
- Good DevEx
- Nrwl consulting plan if it was necessary (paying)
- Module Federation generator (since 14 version)

**Cons:** 

- There isn't an Nx specialist in the team, so we'll need to learn about it
- Uncertain implementation, once we are learning about it
- Git flow might be a challenge
- CI/CD might be a challenge
- CI/CD time might not be impacted remotely, if we don’t pay for that (Nx Cloud)

### Who is Module federation (MF)?

Module Federation provides a solution to the scaling problem by allowing a Single Page Application (SPA) to be sliced into multiple smaller remote applications that are built independently. Module Federation is not required to Nx applications, but it is has been considered as possibility for us.

### How can they help us?

**DevExp:** Nx is smart and can understand the dependencies between modules, which helps decrease the amount of code that must be *tested*, *linted*, *built,* and so on. Giving us a nice DevExp (and they care about it), locally. Other Nx tools help us to create a first-class monorepo experience. So, let's say that we wanna keep our code in **one** repository, adding Nx would give us nice tools.

**CI/CD:** Nx itself does not solve CI/CD problem (in terms of speed) and it's a challenge in terms of monorepos. But, if you combine Nx with Nx Cloud we could reduce CI/CD speed (remotely) and also keep it easier, although we must pay for that. The same thing can be done by Nx and Module federation combination, but CI/DI would be complex and also has a price for keeping multiple hosts.

**Team growth:** Nx can help us create a scalable infrastructure, splitting our code and making it more decoupled. The way it will be done, will depend on Vue's (end other JS's frameworks) limitations.

**JS Framework agnostic:** Module Federation might give us the chance to work with different JS frameworks.

### Nx, MF and Nx Cloud combinations

Please, see these combinations as independent (because they are), which means we could start simple and improve it. The idea of this topic, that once I have searched about Nx, MF, and Nx Cloud, is exposing the pros and cons of combining these technologies. But for sure we can picture a timeline implementation where Combination 1 is implemented and then Combination 2 is implemented.

1) #### Nx only ####

pros: 

- Easier CI/CD (we don’t have independent deploys)
- All Nx tools and approaches to monorepo
- DevEx (locally)

Cons:

- Release time might not be too impacted (cached computation and incremental build just locally)

2) #### Nx and Nx Cloud ####

pros: 

- Easier CI/CD (we don’t have independent deploys)
- All Nx tools and approaches to monorepo
- Release time too impacted (cached computation and incremental build remotely and locally)

Cons:

- Nx Cloud is not free.
- Another technology to take care of

3) #### Nx and Module federation (not implicit dependency) ####

pros: 

- Deploy modules independently
- Release time too impacted (build independently)
- Possibility to explore the use of diff JS Frameworks in the same project

Cons:

- CI/CD might be a challenge
- Each independent module (host and remotes) must have multiple environments (remoteA.dev, remoteB.dev, remoteC.dev). It also might have a price impact
- We might lose the Nx graph tool out of the box, once Nx will see each remote and host as independent (it might change in the Nx future versions). Including, we can try to use generators to solve it for us, I guess it is possible.

4) #### Nx and Module federation (implicit dependency) ####

pros: 

- Easier CI/CD (we don’t have independent deploys)
- All Nx tools and approaches to monorepo
- Possibility to explore the use of diff JS Frameworks in the same project

Cons:

- Release time might not be too impacted (cached computation and incremental build just locally). Actually, without cached computation, and distributed computation caching remotely, it can **increase** release time.

5) #### Nx, Module federation (implicit dependency), and Nx Cloud ####

pros: 

- Easier CI/CD (we don’t have independent deploys)
- Release time too impacted (cached computation, and distributed computation caching). Regarding the documantion, using those guys together give us the faster release.
- All Nx tools and approaches to monorepo
- Possibility to explore the use of diff JS Frameworks in the same project

Cons:

- Nx Cloud is not free.
- Another technology to take care of

### Implementation

Coming back again, Nx is a tool for first-class monorepo experience. So, add it to our project not exclude architectures/patterns that fit with our solution. Defining monorepo as the perfect repository management for us, Nx gonna help with it. 

So, my recommendation would add [Nx (only)](#Nx-only) to the project and explore it little by little - defining git-flow and CI/CD, which gonna be a huge step. Later, we can add new technologies/approaches to help us in our target (as Module Federation, Nx Cloud).

[Please see here pros and cons](#Nx-only)

`More about the proposal might come soon`


## Project main stack

- [Nx](https://nx.dev)
- [React](https://reactjs.org)

## Commands

### Running locally 

`yarn && nx serve shell`

### Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

### Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
