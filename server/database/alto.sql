--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: lesson_resources; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lesson_resources (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "updatedAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "deletedAt" date,
    "lessonId" uuid,
    "resourceId" uuid,
    type character varying NOT NULL
);


ALTER TABLE public.lesson_resources OWNER TO postgres;

--
-- Name: lessons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lessons (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "updatedAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "deletedAt" date,
    name character varying NOT NULL,
    description character varying NOT NULL
);


ALTER TABLE public.lessons OWNER TO postgres;

--
-- Name: lessons_resources_lesson_resources; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lessons_resources_lesson_resources (
    "lessonsId" uuid NOT NULL,
    "UnitResourcesId" uuid NOT NULL
);


ALTER TABLE public.lessons_resources_lesson_resources OWNER TO postgres;

--
-- Name: resources; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resources (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "updatedAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "deletedAt" date,
    name character varying NOT NULL,
    "originalName" character varying NOT NULL,
    type character varying NOT NULL,
    "mimeType" character varying NOT NULL,
    size numeric NOT NULL,
    src character varying NOT NULL,
    available boolean NOT NULL
);


ALTER TABLE public.resources OWNER TO postgres;

--
-- Name: subscriptions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subscriptions (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "updatedAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "deletedAt" date,
    available boolean NOT NULL,
    "startedAt" date NOT NULL,
    "expiredAt" date NOT NULL,
    price double precision NOT NULL,
    features character varying NOT NULL,
    "durationKind" integer NOT NULL,
    "billingCycleKind" integer NOT NULL,
    description character varying NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.subscriptions OWNER TO postgres;

--
-- Name: units; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.units (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "updatedAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "deletedAt" date,
    name character varying NOT NULL,
    description character varying NOT NULL,
    text character varying NOT NULL,
    "lessonId" uuid
);


ALTER TABLE public.units OWNER TO postgres;

--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "updatedAt" date DEFAULT '2023-08-12'::date NOT NULL,
    "deletedAt" date,
    "firstName" character varying NOT NULL,
    role numeric NOT NULL,
    "middleName" character varying NOT NULL,
    "lastName" character varying NOT NULL,
    email character varying NOT NULL,
    "passwordHash" character varying NOT NULL,
    salt character varying NOT NULL,
    active boolean NOT NULL,
    "blockedAt" date
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Data for Name: lesson_resources; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lesson_resources (id, "createdAt", "updatedAt", "deletedAt", "lessonId", "resourceId", type) FROM stdin;
\.


--
-- Data for Name: lessons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lessons (id, "createdAt", "updatedAt", "deletedAt", name, description) FROM stdin;
ced28c4e-0917-471d-8d40-89cdabdf4163	2023-08-12	2023-08-12	\N	Мой первый урок	На этом уроке вы узнаете основы источников возобновляемой энергии, их важность для устойчивого развития и потенциал в борьбе с изменением климата.
\.


--
-- Data for Name: lessons_resources_lesson_resources; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lessons_resources_lesson_resources ("lessonsId", "UnitResourcesId") FROM stdin;
\.


--
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resources (id, "createdAt", "updatedAt", "deletedAt", name, "originalName", type, "mimeType", size, src, available) FROM stdin;
\.


--
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subscriptions (id, "createdAt", "updatedAt", "deletedAt", available, "startedAt", "expiredAt", price, features, "durationKind", "billingCycleKind", description, name) FROM stdin;
\.


--
-- Data for Name: units; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.units (id, "createdAt", "updatedAt", "deletedAt", name, description, text, "lessonId") FROM stdin;
734e9090-e659-4f6d-815b-c8b757377dfb	2023-08-12	2023-08-12	\N	Юнит номер 2	Описание юнита 2		ced28c4e-0917-471d-8d40-89cdabdf4163
cfc731d2-e903-446b-908b-a577c7793c14	2023-08-12	2023-08-12	\N	Юнит номер 1	Описание юнита 1		ced28c4e-0917-471d-8d40-89cdabdf4163
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, "createdAt", "updatedAt", "deletedAt", "firstName", role, "middleName", "lastName", email, "passwordHash", salt, active, "blockedAt") FROM stdin;
\.


--
-- Name: units PK_5a8f2f064919b587d93936cb223; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.units
    ADD CONSTRAINT "PK_5a8f2f064919b587d93936cb223" PRIMARY KEY (id);


--
-- Name: resources PK_632484ab9dff41bba94f9b7c85e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT "PK_632484ab9dff41bba94f9b7c85e" PRIMARY KEY (id);


--
-- Name: lessons_resources_lesson_resources PK_929ca55595be9a507edad8fadde; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons_resources_lesson_resources
    ADD CONSTRAINT "PK_929ca55595be9a507edad8fadde" PRIMARY KEY ("lessonsId", "UnitResourcesId");


--
-- Name: lessons PK_9b9a8d455cac672d262d7275730; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT "PK_9b9a8d455cac672d262d7275730" PRIMARY KEY (id);


--
-- Name: subscriptions PK_a87248d73155605cf782be9ee5e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT "PK_a87248d73155605cf782be9ee5e" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: lesson_resources PK_d386430b2dbe4798fdd3c558d8b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_resources
    ADD CONSTRAINT "PK_d386430b2dbe4798fdd3c558d8b" PRIMARY KEY (id);


--
-- Name: IDX_1f151d785be972634278dbd27d; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_1f151d785be972634278dbd27d" ON public.lessons_resources_lesson_resources USING btree ("lessonsId");


--
-- Name: IDX_5bf215780e6c716f031c571ba4; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_5bf215780e6c716f031c571ba4" ON public.lessons_resources_lesson_resources USING btree ("UnitResourcesId");


--
-- Name: lessons_resources_lesson_resources FK_1f151d785be972634278dbd27df; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons_resources_lesson_resources
    ADD CONSTRAINT "FK_1f151d785be972634278dbd27df" FOREIGN KEY ("lessonsId") REFERENCES public.lessons(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: lessons_resources_lesson_resources FK_5bf215780e6c716f031c571ba48; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons_resources_lesson_resources
    ADD CONSTRAINT "FK_5bf215780e6c716f031c571ba48" FOREIGN KEY ("UnitResourcesId") REFERENCES public.lesson_resources(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: units FK_ce7acef8337a75a014fa54233ec; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.units
    ADD CONSTRAINT "FK_ce7acef8337a75a014fa54233ec" FOREIGN KEY ("lessonId") REFERENCES public.lessons(id);


--
-- PostgreSQL database dump complete
--

