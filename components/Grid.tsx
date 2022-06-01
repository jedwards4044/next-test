import styles from './grid.module.scss'
import { GridProps, GridData } from './types'
import Image from 'next/image'
import cn from 'classnames'
import { reverse } from 'dns'
import Parser from 'html-react-parser'

const Grid = (props: GridProps) => {
    const { items } = props

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {items.map((item, index) => (
                    <GridBlock {...item} key={index} />
                ))}
            </div>
        </div>
    )
}

const GridBlock = (props: GridData) => {
    const { headline = '', body = '', border = false, imageUrl, linkUrl, btnText = '', textSize = 'md', align = 'left' } = props

    return (
        <div
            className={cn(styles.block, {
                [styles.bordered]: border === true,
                [styles.imageArticle]: imageUrl,
                [styles.sm]: textSize === 'sm',
                [styles.md]: textSize === 'md',
                [styles.lg]: textSize === 'lg',
                [styles.center]: align === 'center',
                [styles.left]: align === 'left',
                [styles.right]: align === 'right',
            })}
        >
            {imageUrl && (
                <div className={styles.imageTile}>
                    <Image src={imageUrl} layout="fill" alt="" objectFit="cover" objectPosition="top center" />
                </div>
            )}

            <div className={styles.textBlock}>
                {headline && (
                    <div className={styles.title}>
                        <div className={styles.text}>{headline}</div>
                    </div>
                )}

                <p className={styles.text}>{Parser(body)}</p>

                {linkUrl && btnText && (
                    <div className={styles.cta_btn}>
                        <a href={linkUrl}>{btnText}</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Grid