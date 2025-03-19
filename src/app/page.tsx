import Link from "next/link";
import styles from "./../styles/Page.module.css";
import { CVInfo } from "@/common/CVInfo";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.username}>
          {CVInfo.user.name}
        </div>
        <div className={styles.jobTitle}>
          {CVInfo.user.jobTitle}
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.groupHeader}>О себе</div>
        {CVInfo.user.description}
      </div>
      <div className={styles.group}>
        <div className={styles.groupHeader}>Навыки</div>
        <div className={styles.groupInfo}>
          <div className={styles.groupInfoRow}>
            <div className={styles.groupInfoRowHeader}>Языки программирования: </div>
            {CVInfo.skills.programLanguages.map( (value, index) => {
              if ( index == CVInfo.skills.programLanguages.length - 1 ) {
                return value
              }
              return value + ", "
            } )}
          </div>
          <div className={styles.groupInfoRow}>
            <div className={styles.groupInfoRowHeader}>Фреймворки и библиотеки: </div>
            {CVInfo.skills.libraries.map( (value, index) => {
              if ( index == CVInfo.skills.libraries.length - 1 ) {
                return value
              }
              return value + ", "
            } )}
          </div>
          <div className={styles.groupInfoRow}>
            <div className={styles.groupInfoRowHeader}>Инструменты: </div>
            {CVInfo.skills.instruments.map( (value, index) => {
              if ( index == CVInfo.skills.instruments.length - 1 ) {
                return value
              }
              return value + ", "
            } )}
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.groupHeader}>Проекты</div>
        <div className={styles.list}>
          {CVInfo.projects.map((value, index) => {
            return (
              <div key={index} className={styles.groupInfo}>
                <div className={styles.groupInfoRow}>{"Название проекта: " + value.name}</div>
                <div className={styles.groupInfoRow}>
                  {"Технологии: "}
                  {value.technologies.map( (t, index) => {
                    if ( index == value.technologies.length - 1 ) {
                      return t
                    }
                    return t + ", "
                  } )}
                </div>
                <Link href={value.link}>
                  <GitHubIcon height={32} width={32} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.groupHeader}>Образование</div>
        <div className={styles.list}>
          {CVInfo.eduacation.map( (value, index) => {
            return (
              <div key={index} className={styles.groupInfo}>
                <div className={styles.groupInfoRow}>{"Место: " + value.place}</div>
                <div className={styles.groupInfoRow}>{"Направление: " + value.degree}</div>
                <div className={styles.groupInfoRow}>{"Период: " + value.date}</div>
              </div>
            )
          } )}
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.groupHeader}>Контракты</div>
        <div className={styles.groupInfo}>
          <div className={styles.groupInfoRow}>
            <div className={styles.groupInfoRowHeader}>Номер телефона: </div>
            {CVInfo.contracts.phone}
          </div>
          <div className={styles.groupInfoRow}>
            <div className={styles.groupInfoRowHeader}>Email: </div>
            {CVInfo.contracts.email}
          </div>
          <div className={styles.groupInfoRow}>
            <div className={styles.groupInfoRowHeader}>GitHub: </div>
            <Link href={CVInfo.contracts.github}>
              {CVInfo.contracts.github}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
